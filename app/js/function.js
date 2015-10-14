'use strict';


//HOVER BOX THings

/*hover box notes
r-n: route name
*/

function getPos(event) {
var w = $('#map').width()/4;
var h = $('#map').height()/4;
var posX = event.pageX;
var posY = event.pageY;
var x = 0;
var y = 0;
    posX < w ? x = posX : x = posX - ($('#hover-box').outerWidth(true) / 2)
    posY > (h*0.3) ? y = (posY - $('#hover-box').outerHeight(true) - 40) : y = posY + 20
    $('#hover-box').css({
        'left': x,
        'top': y + 30
    });
}

function initHover() {
    $('#hover-box').show();
    $(document).bind('mousemove', getPos);
}

function endHover() {
    $('#hover-box').hide();
    $(document).unbind('mousemove', getPos);
}

//number format
function numberChange(number) {
    if (number === 'No data') {
        return 'No data';
    } else {
        return numeral(number).format('0,0');
    }
}

//HOVER BOX
function $onEachFeature(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route: '+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change??             
            initHover();           
        }
    }); 
}

//filling by categories

function $onEachFeaturebsi(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $bsi = feature.properties.busStopIssue;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change??
            $('#another').text('Bus Stop Issue: ');
            $('#catX').text(numberChange(bsi));            
            initHover();           
        }
    }); 
}

function $onEachFeatureCap(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $capacity = feature.properties.capacity;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#another').text('Capacity: ');
            $('#catX').text(numberChange($capacity));            
            initHover();           
        }
    }); 
}

function $onEachFeatureClean(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $clean = feature.properties.cleanlieness;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#another').text('Cleanlieness Complaints: ');
            $('#catX').text(numberChange($clean));
            initHover();
        }
    }); 
}

function $onEachFeatureNS(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $noStop = feature.properties.noStop;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#another').text('No Stop: ');
            $('#catX').text(numberChange($noStop));            
            initHover();           
        }
    }); 
}

function $onEachFeatureDC(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $DC = feature.properties.driverConduct;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#another').text('Capacity: ');
            $('#catX').text(numberChange($DC));            
            initHover();           
        }
    }); 
}

function $onEachFeatureFares(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $fares = feature.properties.fares;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#another').text('Fares: ');
            $('#catX').text(numberChange($fares));            
            initHover();           
        }
    }); 
}

function $onEachFeatureMaint(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $maintenance = feature.properties.maintenance;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#another').text('Maintenance: ');
            $('#catX').text(numberChange($maintenance));            
            initHover();           
        }
    }); 
}

function $onEachFeaturePC(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $PC = feature.properties.passengerConduct;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change??
            $('#another').text('Passenger Conduct: ');
            $('#catX').text(numberChange($PC));            
            initHover();           
        }
    }); 
}

function $onEachFeatureMisc(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $misc = feature.properties.misc;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#another').text('Miscelleneous: ');
            $('#catX').text(numberChange($misc));            
            initHover();           
        }
    }); 
}

function $onEachFeaturePraise(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $praise = feature.properties.praise;

            $layer.bringToFront();
            $('#r-n').html('<h4> Route:'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#another').text('Cleanlieness Complaints: ');
            $('#catX').text(numberChange($praise));            
            initHover();           
        }
    }); 
}

function $onEachFeatureSchedule(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $schedule = feature.properties.schedule;

            $layer.bringToFront();
            $('#r-n').html('<h4>'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#another').text('Schedule: ');
            $('#catX').text(numberChange($schedule));            
            initHover();           
        }
    }); 
}

function $onEachFeatureSafety(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $safety = feature.properties.safety;

            $layer.bringToFront();
            $('#r-n').html('<h4>'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#another').text('Safety: ');
            $('#catX').text(numberChange($safety));            
            initHover();           
        }
    }); 
}

function $onEachFeatureClean(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $clean = feature.properties.cleanlieness;

            $layer.bringToFront();
            $('#r-n').html('<h4>'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#another').text('Cleanlieness Complaints: ');
            $('#catX').text(numberChange($clean));            
            initHover();           
        }
    }); 
}

function $onEachFeatureClean(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.complaints;
            var boardings = feature.properties.boardings;
            var $clean = feature.properties.cleanlieness;

            $layer.bringToFront();
            $('#r-n').html('<h4>'+routename+'</h4>');
            $('#complaints').text(numberChange(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#another').text('Cleanlieness Complaints: ');
            $('#catX').text(numberChange($clean));            
            initHover();           
        }
    }); 
}


//======================//
//Category Layer Builder//
//======================//

//FIRST the SHADER FUNCTION


function getColor(d) {

    if (d > 1000) {
        return '#ff0000'; 
    } else if ((d>700) && (d<1000)) {
        return '#ff4c4c';
    } else if ((d>400) && (d<700)) {
        return '#ff7f7f';
    }else if ((d>100) && (d<400)) {
        return '#ffb2b2';
    }else if ((d>0) && (d<100)) {
        return '#ff3232';
    }else {
        return '#000';
    }
}

function getColorBSI(d) {

    var e = 0.538343839;
    var $d = 0.8208252213;
    var c = 1.432878424;
    var b = 1.776779837;
    var a = 3.809967772;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorCap(d) {

    var e = 0.1341067718;
    var $d = 0.2699241971;
    var c = 0.3694387503;
    var b = 0.6422814358;
    var a = 2.851558647;


    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorClean(d) {

    var e = 0.223571283;
    var $d = 0.2955733142;
    var c = 0.3608733794;
    var b = 0.6210617916;
    var a = 2.660024206;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorNS(d) {

    var e = 2.307127626;
    var $d = 2.86267217;
    var c = 3.099379757;
    var b = 3.339214752;
    var a = 8.631745092;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorDC(d) {

    var e =2.696088598;
    var $d =3.062184872;
    var c =3.649766379;
    var b = 4.146634459;
    var a = 10.4500951;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorFares(d) {

    var e = 0;
    var $d = 0.08227613257;
    var c = 0.1515323755;
    var b = 0.2324213776;
    var a = 0.5231956409;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorMain(d) {

    var e =0.1397060724;
    var $d = 0.1624800954;
    var c = 0.2346360329;
    var b = 0.3581218899;
    var a = 0.8386781594;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorPC(d) {

    var e = 0;
    var c = 0.04255045483;
    var b = 0.06990371367;
    var a = 0.2100521139;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < c)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorMisc(d) {

    var e = 1.005159147;
    var $d = 1.244004339;
    var c = 1.563548131;
    var b = 1.854050328;
    var a = 3.610032851;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorPraise(d) {

    var e =0.5951828068;
    var $d = 0.7936492895;
    var c = 0.905919818;
    var b = 1.445976755;
    var a = 3.80003458;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorSchedule(d) {

    var e = 3.705386793;
    var $d = 7.950137465;
    var c = 12.20616602;
    var b = 17.19753982;
    var a = 42.94039076;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

function getColorSafety(d) {

    var e = 0.8085750814;
    var $d = 0.9597812732;
    var c = 1.25957417;
    var b = 1.4166391;
    var a = 4.180038038;

    if (d >= a) {
        return '#ff0000'; 
    } else if ((d >= b) && (d < a)) {
        return '#ff3232';
    } else if ((d >= c) && (d<  b)) {
        return '#ff6666';
    } else if ((d >= $d) && (d < c)) {
        return '#ff7f7f';
    } else if ((d >= e) && (d < $d)) {
        return '#ff9999';
    } else if ((d >= 0) && (d < e)) {
        return '#ffcccc';
    } else {
        return '#000';
    }
}

//Template
/*function lineShadeComplaints(features, layer){
    return{
        color: getColor(features.properties.complaints),
    };
}*/

//STYLE

function lineShadeComplaints(features, layer){
    return{
        color: getColor(features.properties.complaints),
    };
}

//Bus Stop Issue
function lineShadeBSI(features, layer){
    return{
        color: getColorBSI(features.properties.bsiR),
    };
}

//Capacity
function lineShadeCapacity(features, layer){
    return{
        color: getColorCap(features.properties.capR),
    };
}

//No Stop
function lineShadeNoStop(features, layer){
    return{
        color: getColorNS(features.properties.nsR),
    };
}

//Driver Conduct
function lineShadeDC(features, layer){
    return{
        color: getColorDC(features.properties.dcR),
    };
}

//Fares
function lineShadeFares(features, layer){
    return{
        color: getColorFares(features.properties.farR),
    };
}

//Maintenance
function lineShadeMaintenance(features, layer){
    return{
        color: getColorMain(features.properties.mainR),
    };
}

//Misc
function lineShadeMisc(features, layer){
    return{
        color: getColorMisc(features.properties.miscR),
    };
}

//Passenger
function lineShadePassenger(features, layer){
    return{
        color: getColorPC(features.properties.pcR),
    };
}

//Praise
function lineShadePraise(features, layer){
    return{
        color: getColorPraise(features.properties.praiR),
    };
}

//Safety
function lineShadeSafety(features, layer){
    return{color: getColorSafety(features.properties.safeR),
    };
}

//Schedule
function lineShadeSchedule(features, layer){
    return{
        color: getColorSchedule(features.properties.schedR),
    };
}

//Cleanlieness
function lineShadeCleanlieness(features, layer){
    return{
        color: getColorClean(features.properties.cleR),
    };
}

var complaints = L.geoJson(busRoutes,{
        style: lineShadeComplaints,
        onEachFeature: $onEachFeature
});

var busStopIssue = L.geoJson(busRoutes,{
        style: lineShadeBSI,
        onEachFeature: $onEachFeaturebsi
});

var capacity = L.geoJson(busRoutes,{
        style: lineShadeCapacity,
        onEachFeature: $onEachFeatureCap
});

var cleanlieness = L.geoJson(busRoutes,{
        style: lineShadeCleanlieness,
        onEachFeature: $onEachFeatureClean
});

var noStop = L.geoJson(busRoutes,{
        style: lineShadeNoStop,
        onEachFeature: $onEachFeatureNS
});

var driverConduct = L.geoJson(busRoutes,{
        style: lineShadeDC,
        onEachFeature: $onEachFeatureDC
});

var fares = L.geoJson(busRoutes,{
        style: lineShadeFares,
        onEachFeature: $onEachFeatureFares
});

var maintenance = L.geoJson(busRoutes,{
        style: lineShadeMaintenance,
        onEachFeature: $onEachFeatureMaint
});

var misc = L.geoJson(busRoutes,{
        style: lineShadeMisc,
        onEachFeature: $onEachFeatureMisc
});

var passenger = L.geoJson(busRoutes,{
        style: lineShadePassenger,
        onEachFeature: $onEachFeaturePC
});

var praise = L.geoJson(busRoutes,{
        style: lineShadePraise,
        onEachFeature: $onEachFeaturePraise
});

var safety = L.geoJson(busRoutes,{
        style: lineShadeSafety,
        onEachFeature: $onEachFeatureSafety
});

var schedule = L.geoJson(busRoutes,{
        style: lineShadeSchedule,
        onEachFeature: $onEachFeatureSchedule
});


///////////////////////////////////////
///MAPMAPMAPMAPMAPMAPMAPMAPMAPMAPMAP///
///////////////////////////////////////

//MAKE TILE LAYER FOR ZOOMED IN VIEW///

var tiles = new L.StamenTileLayer('toner-lite');

// MOBILE WIDTHS
var mobile = 843;
var w = window.innerWidth;

// FUNCTIONS TO FIX MAP POSITION 25.721 , -80],  10)
// AND ZOOM ON PAGE LOAD
function fixPosition() {
    if (w >= mobile) {
        return [25.83, -80.199];
    } else {
        return [25.768, -80.247];
    }
}

function fixZoom() {
    if (w > mobile) {
        return 11;
    } else {
        return 11;
    }
}

function controlZoom() {
    if (w > mobile) {
        return true;
    } else {
        return false;
    }
}

var coordinates = fixPosition();
var lat = coordinates[0];
var lon = coordinates[1]

//THE MAP///

var map = new L.Map('map-container', {
    center: new L.LatLng(lat, lon),
    zoom: fixZoom(),
    minZoom: 10,
    maxZoom: 16,
    zoomControl: false,
    doubleClickZoom: true,
    VML: true,
    scrollWheelZoom: controlZoom()
}).addLayer(tiles);

var control = L.control.zoom({
    'position': 'topleft'
});
control.addTo(map);

//clear
function clearLayer() {
    map.removeLayer(complaints);
    map.removeLayer(busStopIssue);
    map.removeLayer(capacity);
    map.removeLayer(cleanlieness);
    map.removeLayer(noStop);
    map.removeLayer(driverConduct);
    map.removeLayer(fares);
    map.removeLayer(maintenance);
    map.removeLayer(passenger);
    map.removeLayer(misc);
    map.removeLayer(praise);
    map.removeLayer(schedule);
    map.removeLayer(safety);
    map.removeLayer(busFeature);
    //alert('Clear Layers!');
}