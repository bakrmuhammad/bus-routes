#!/usr/bin/env node

/* jshint camelcase:false */
'use strict';

var chalk = require('chalk');
var fs = require('fs');
var google = require('googleapis');
var inquirer = require('inquirer');
var nconf = require('nconf');
var _open = require('open');
var untildify = require('untildify');

var OAuth2Client = google.auth.OAuth2;

// Collect the environmental variables
nconf.env();

// If expected variables are not set, look for them in the default locations
nconf.defaults({
  'MH_APP_GOOGLE_CLIENT_SECRETS': '~/.mh_app_google_client_secrets.json',
  'MH_APP_TOKEN': '~/.mh_app_token.json'
});

function authenticate() {
  
  var secretFile = untildify(nconf.get('MH_APP_GOOGLE_CLIENT_SECRETS'));
  
  fs.readFile(secretFile, 'utf8', function(err, data) {
  
    if (err) {
      return console.log(chalk.red('Could not read the client secrets file at %s. Are you sure it\'s there?'), secretFile);
    }

    var secrets = JSON.parse(data);


    var client = new OAuth2Client(
      secrets.client_id,
      secrets.client_secret,
      secrets.redirect_uris[0]
    );

    console.log('I need to send you to your Google account real quick to collect a code. About to open your preferred browser...');
    setTimeout(getAuthToken, 5000, client);
  });
}


authenticate();


function getAuthToken(client) {
  var url = client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/drive.readonly'
  });

  _open(url);

  inquirer.prompt([{type: 'input', name: 'auth', message: 'Enter your code'}], function(answers) {
    client.getToken(answers.auth, function(err, token) {
      if (err) {
        return console.log(chalk.red('No token returned. Your code may have been bad. Try again!'));
      }

      fs.writeFile(untildify('~/.mh_app_token.json'), JSON.stringify(token), function(err) {
        if (err) {
          return console.log(err);
        }

        return console.log(chalk.green('Google authenication token saved!'));
      });
    });
  });
}

if (fs.existsSync(untildify(nconf.get('MH_APP_TOKEN')))) {
  inquirer.prompt([{
    type: 'confirm',
    name: 'tokenExists',
    default: false,
    message: 'A token already exists on your computer. Having issues? Do you need to regenerate it?'
  }], function(answers) {
    if (answers.tokenExists) {
      authenticate();
    } else {
      return;
    }
  });
} else {
  authenticate();
}
