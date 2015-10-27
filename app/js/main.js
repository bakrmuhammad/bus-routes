'use strict';
//HOVER BOX THings

/*hover box notes
r-n: route name
*/

function getPos(event) {
    var w = $('#map-container').width()/4;
    var h = $('#map-container').height()/4;
    var posX = event.pageX;
    var posY = event.pageY;
    var x = 0;
    var y = 0;

    var height = $('#hover-box').height();

        posX < w ? x = posX : x = posX - ($('#hover-box').outerWidth(true) / 2)
        posY > (h*0.3) ? y = (posY - $('#hover-box').outerHeight(true) - 40) : y = posY = 20
    
        //if elsefixes box blocking cursor issue
        if (height < 100){
            $('#hover-box').css({
                'left': x + 50,
                'top': y + 170
            });
        } else {
            $('#hover-box').css({
                'left': x + 50,
                'top': y + 220
            });
        }
}

function getClick(event){
    var posX = event.pageX;
    var posY = event.pageY;
    var width = $('#hover-box').width();
    
    $('#hover-box').css({
        'position': 'static',
        'opacity': 1,
    });
}


function initHover() {
    var m = 1024;
    var doc = $(window).width();

    if (doc > m){
        $('#hover-box').show();
        $(document).bind('mousemove', getPos);
    } else {
        $('#hover-box').show();
        $(document).bind('click', getClick);
    }
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

function ratio(number) {
    if (number === 'No data') {
        return 'No data';
    } else {
        return numeral(number).format('0.00');
    }
}


//HOVER BOX
function $onEachFeature(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').html('<b>'+ratio(complaints)+'</b>');
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change?? 
            $('#sentence').html('');            
            initHover();    
        
        }
    }); 
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;

            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            
            if ($layer){
                $layer.bringToFront();
                $layer.setStyle(highlightStyle);
            } else {
                layer.setStyle(defaultstyle);
            }

            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').html('<b>'+ratio(complaints)+'</b>');
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change?? 
            $('#sentence').html('');            
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
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $bsi = feature.properties.bsiR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change??
            $('#sentence').html('<p>This route had <b>' + ratio($bsi) + '</b> bus stop issue complaints per 100,000 rides in 2015.</p>');            
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    }); 
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $bsi = feature.properties.bsiR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change??
            $('#sentence').html('<p>This route had <b>' + ratio($bsi) + '</b> bus stop issue complaints per 100,000 rides in 2015.</p>');            
            initHover();           
        }
    });
}

function $onEachFeatureCap(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $capacity = feature.properties.capR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            $('#sentence').html('<p>This route had <b>' + ratio($capacity) + '</b> capacity complaints per 100,000 rides in 2015.</p>');            
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    }); 
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $capacity = feature.properties.capR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            $('#sentence').html('<p>This route had <b>' + ratio($capacity) + '</b> capacity complaints per 100,000 rides in 2015.</p>');            
            initHover();           
        }
    });
}

function $onEachFeatureClean(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $clean = feature.properties.cleR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($clean) + '</b> cleanliness complaints per 100,000 rides in 2015.</p>'); 
            initHover();
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $clean = feature.properties.cleR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($clean) + '</b> cleanliness complaints per 100,000 rides in 2015.</p>'); 
            initHover();
        }
    }); 
}

function $onEachFeatureNS(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $noStop = feature.properties.nsR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            $('#sentence').html('<p>This route had <b>' + ratio($noStop) + '</b> missed stop complaints per 100,000 rides in 2015.</p>');             
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $noStop = feature.properties.nsR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            $('#sentence').html('<p>This route had <b>' + ratio($noStop) + '</b> missed stop complaints per 100,000 rides in 2015.</p>');             
            initHover();           
        }
    }); 
}

function $onEachFeatureDC(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $DC = feature.properties.dcR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#sentence').html('<p>This route had <b>' + ratio($DC) + '</b> complaints about driver conduct per 100,000 rides in 2015.</p>');            
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $DC = feature.properties.dcR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#sentence').html('<p>This route had <b>' + ratio($DC) + '</b> complaints about driver conduct per 100,000 rides in 2015.</p>');            
            initHover();           
        }
    }); 
}

function $onEachFeatureFares(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $fares = feature.properties.farR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($fares) + '</b> ride fare complaints per 100,000 rides in 2015.</p>');            
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $fares = feature.properties.farR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($fares) + '</b> ride fare complaints per 100,000 rides in 2015.</p>');            
            initHover();           
        }
    }); 
}

function $onEachFeatureMaint(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $maintenance = feature.properties.mainR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($maintenance) + '</b> bus maintenance complaints per 100,000 rides in 2015.</p>');             
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $maintenance = feature.properties.mainR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($maintenance) + '</b> bus maintenance complaints per 100,000 rides in 2015.</p>');             
            initHover();           
        }
    }); 
}

function $onEachFeaturePC(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $PC = feature.properties.pcR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change??
            $('#sentence').html('<p>This route had <b>' + ratio($PC) + '</b> passenger conduct complaints per 100,000 rides in 2015.</p>');  
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $PC = feature.properties.pcR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));
            //add extra things, stroke change??
            $('#sentence').html('<p>This route had <b>' + ratio($PC) + '</b> passenger conduct complaints per 100,000 rides in 2015.</p>');  
            initHover();           
        }
    }); 
}

function $onEachFeatureMisc(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $misc = feature.properties.miscR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#sentence').html('<p>This route had <b>' + ratio($misc) + '</b> miscellaneous complaints per 100,000 rides in 2015.</p>');             
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $misc = feature.properties.miscR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#sentence').html('<p>This route had <b>' + ratio($misc) + '</b> miscellaneous complaints per 100,000 rides in 2015.</p>');             
            initHover();           
        }
    }); 
}

function $onEachFeaturePraise(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $praise = feature.properties.praiR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($praise) + '</b> positive comments per 100,000 rides in 2015.</p>');             
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $praise = feature.properties.praiR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4> Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($praise) + '</b> positive comments per 100,000 rides in 2015.</p>');             
            initHover();           
        }
    }); 
}

function $onEachFeatureSchedule(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $schedule = feature.properties.schedR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4>Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($schedule) + '</b> scheduling  complaints per 100,000 rides in 2015.</p>');              
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });
    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $schedule = feature.properties.schedR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4>Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??
            
            $('#sentence').html('<p>This route had <b>' + ratio($schedule) + '</b> scheduling  complaints per 100,000 rides in 2015.</p>');              
            initHover();           
        }
    }); 
}

function $onEachFeatureSafety(feature, layer) {
    layer.on({
        mouseover: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $safety = feature.properties.safeR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4>Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#sentence').html('<p>This route had <b>' + ratio($safety) + '</b> safety complaints per 100,000 rides in 2015.</p>');              
            initHover();           
        }
    });
    layer.on({
        mouseout: function(e){
            var defaultstyle = {
                opacity: 0.8,
                weight: 3
            };
            layer.setStyle(defaultstyle);
        }
    });

    layer.on({
        click: function(e) {
            var $layer = e.target;
            var routename = feature.properties.routename;
            var complaints = feature.properties.comR;
            var boardings = feature.properties.boardings;
            var $safety = feature.properties.safeR;
            var highlightStyle = {
                opacity: 1,
                weight: 5
            };

            $layer.bringToFront();
            $layer.setStyle(highlightStyle);
            $('#r-n').html('<h4>Route '+routename+'</h4>');
            $('#complaints').text(ratio(complaints));
            $('#boardings').text(numberChange(boardings));

            //add extra things, stroke change??

            $('#sentence').html('<p>This route had <b>' + ratio($safety) + '</b> safety complaints per 100,000 rides in 2015.</p>');              
            initHover();           
        }
    }); 
}

//======================//
//Category Layer Builder//
//======================//

//FIRST the SHADER FUNCTION


function getColor(d) {

    var e = 8.421436326;
    var $d = 14.95171354;
    var c = 20.48794468;
    var b = 29.55762779;
    var a = 39.04607043;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else {
        return '#000';
    }
}

function getColorBSI(d) {

    var e = 0.3031998547;
    var $d = 0.5931890876;
    var c = 0.8711379273;
    var b = 1.470364798;
    var a = 2.385001452;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else {
        return '#000';
    }
}

function getColorCap(d) {

    var e = 0;
    var $d = 0.1422726346;
    var c = 0.29456556;
    var b = 0.4172898969;
    var a = 0.7177917854;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else {
        return '#000';
    }
}

function getColorClean(d) {

    var e = 0.05547884065;
    var $d = 0.240100345;
    var c = 0.2981678438;
    var b = 0.4453004108;
    var a = 0.8516760329;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    }else {
        return '#000';
    }
}

function getColorNS(d) {

    var e = 1.319777335;
    var $d = 2.30743022;
    var c = 2.921418773;
    var b = 3.210066769;
    var a = 4.704594995;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else {
        return '#000';
    }
}

function getColorDC(d) {

    var e = 1.747246165;
    var $d = 2.763946753;
    var c = 3.143746554;
    var b = 3.746278936;
    var a = 4.39374916;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else {
        return '#000';
    }
}

function getColorFares(d) {

    var e = 0;
    var $d = 0.05981598211;
    var c = 0.08337835765;
    var b = 0.1916793282;
    var a = 0.2332306574;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#ffffb2';
    } else {
        return '#000';
    }
}

function getColorMain(d) {

    var e = 0;
    var $d = 0.1398259167;
    var c = 0.1694825965;
    var b = 0.2662878279;
    var a = 0.4401245175;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d > e) && (d < $d)) {
        return '#fed976';
    } else if (d == e) {
        return '#ffffb2';
    } else {
        return '#000';
    }
}

function getColorPC(d) {

    var e = 0;
    var c = 0.02032466209;
    var b = 0.05981598211;
    var a = 0.09017921315;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#feb24c';
    } else if (d == e) {
        return '#ffffb2';
    } else {
        return '#000';
    }
}

function getColorMisc(d) {

    var e = 0.2097388751;
    var $d = 1.005998897;
    var c = 1.256137691;
    var b = 1.676334647;
    var a = 2.27300732;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else if ((d >= 0) && (d < e)) {
        return '#ffffb2';
    } else {
        return '#000';
    }
}

function getColorPraise(d) {

    var e = 0.2368548518;
    var $d = 0.5963356876;
    var c = 0.8015407394;
    var b = 0.908568006;
    var a = 1.4643139;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else if ((d >= 0) && (d < e)) {
        return '#ffffb2';
    } else {
        return '#000';
    }
}

function getColorSchedule(d) {

    var e = 1.17826224;
    var $d = 3.708367453;
    var c = 8.656509695;
    var b = 13.81693214;
    var a = 19.26098105;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else if ((d >= 0) && (d < e)) {
        return '#ffffb2';
    } else {
        return '#000';
    }
}

function getColorSafety(d) {

    var e = 0.3772495864;
    var $d = 0.8229348655;
    var c = 0.973676426;
    var b = 1.302701685;
    var a = 1.539322339;

    if (d >= a) {
        return '#bd0026'; 
    } else if ((d >= b) && (d < a)) {
        return '#f03b20';
    } else if ((d >= c) && (d<  b)) {
        return '#fd8d3c';
    } else if ((d >= $d) && (d < c)) {
        return '#feb24c';
    } else if ((d >= e) && (d < $d)) {
        return '#fed976';
    } else if ((d >= 0) && (d < e)) {
        return '#ffffb2';
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
        opacity: 0.8,
    };
}

//Bus Stop Issue
function lineShadeBSI(features, layer){
    return{
        color: getColorBSI(features.properties.bsiR),
        opacity: 0.8,
    };
}

//Capacity
function lineShadeCapacity(features, layer){
    return{
        color: getColorCap(features.properties.capR),
        opacity: 0.8,
    };
}

//No Stop
function lineShadeNoStop(features, layer){
    return{
        color: getColorNS(features.properties.nsR),
        opacity: 0.8,
    };
}

//Driver Conduct
function lineShadeDC(features, layer){
    return{
        color: getColorDC(features.properties.dcR),
        opacity: 0.8,
    };
}

//Fares
function lineShadeFares(features, layer){
    return{
        color: getColorFares(features.properties.farR),
        opacity: 0.8,
    };
}

//Maintenance
function lineShadeMaintenance(features, layer){
    return{
        color: getColorMain(features.properties.mainR),
        opacity: 0.8,
    };
}

//Misc
function lineShadeMisc(features, layer){
    return{
        color: getColorMisc(features.properties.miscR),
        opacity: 0.8,
    };
}

//Passenger
function lineShadePassenger(features, layer){
    return{
        color: getColorPC(features.properties.pcR),
        opacity: 0.8,
    };
}

//Praise
function lineShadePraise(features, layer){
    return{
        color: getColorPraise(features.properties.praiR),
        opacity: 0.8,
    };
}

//Safety
function lineShadeSafety(features, layer){
    return{color: getColorSafety(features.properties.safeR),
        opacity: 0.8,
    };
}

//Schedule
function lineShadeSchedule(features, layer){
    return{
        color: getColorSchedule(features.properties.schedR),
        opacity: 0.8,
    };
}

//Cleanlieness
function lineShadeCleanlieness(features, layer){
    return{
        color: getColorClean(features.properties.cleR),
        opacity: 0.8,
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

//Build Legend
function buildLegend(category){
    $('.legend-block').remove();
    if (category === 'quintile') {
        var red = ['#ffffb2','#fed976', '#feb24c','#f03b20', '#bd0026'];

        for (var i = 0; i < red.length; i++) {
            $('.key').append('<div class=\'legend-block\' style=\'color:' + red[i] + '\'</div>');
        }
        $('.legend-block').css('width', '20%');
    } else {
        alert('error');
    }
}

/////////////////////////////////////////////////
///MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP///
////////////////////////////////////////////////

//MAKE TILE LAYER FOR ZOOMED IN VIEW///

var tiles = new L.StamenTileLayer('toner-lite');

// MOBILE WIDTHS
var mobile = 843;
var w = window.innerWidth;

// FUNCTIONS TO FIX MAP POSITION 25.721 , -80],  10)
// AND ZOOM ON PAGE LOAD
function fixPosition() {
    if (w >= mobile) {
        return [25.77, -80.22];
    } else {
        return [25.77, -80.28];
    }
}

function fixZoom() {
    if (w > mobile) {
        return 9;
    } else {
        return 10;
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

//JUST THE MAP//

var map = new L.Map('map-container', {
    center: new L.LatLng(lat, lon),
    zoom: fixZoom(),
    minZoom: 9,
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

//Building the Page
//what readers see first
//Bus Routes
function defaultBusRouteColor(feature, layer) {
  return{ 
    color: getColor(feature.properties.comR),
    opacity: 0.8,
  };
}

var busFeature = L.geoJson(busRoutes, {
  style: defaultBusRouteColor,
  onEachFeature : $onEachFeature
});

busFeature.addTo(map);

///////////////////
//Button controls//
///////////////////

$(document).ready(function(){
  var q = 'quintile';
  buildLegend(q);
});

//bus stop issue
$('#1').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  busStopIssue.addTo(map);

});

//capacity
$('#2').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  capacity.addTo(map);
});
//cleanlieness
$('#3').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  cleanlieness.addTo(map);
});

//no stop
$('#4').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  noStop.addTo(map);
});

//driver conduct
$('#5').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  driverConduct.addTo(map);
});

//fares
$('#6').click(function(){
  var category = $(this).html();
  $('.complaint-type').html(' <b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  fares.addTo(map);
});

//maintenance
$('#7').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  maintenance.addTo(map);
});

//passenger conduct
$('#8').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  passenger.addTo(map);
});

//misc
$('#9').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  misc.addTo(map);
});

//praise
$('#10').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('Rate of <b>'+category+'</b> comments per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  praise.addTo(map);
});

//schedule
$('#11').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  schedule.addTo(map);
});

//Safety
$('#12').click(function(){
  var category = $(this).html();
  $('.complaint-type').html('<b>'+category+'</b> complaints per 100,000 rides in');
  //$('#legend').css('display', 'block');
  clearLayer();
  safety.addTo(map);
});

//reset
$('#reset').click(function(){
  $('.complaint-type').html('The ratio of complaints per 100,000 rides');
  clearLayer();
  busFeature.addTo(map);
});

//to get rid of hover box when not in map
$('#map-container').mouseleave(function(){
  $('#hover-box').hide();
});


//.___  ___.   ______   .______    __   __       _______ //
//|   \/   |  /  __  \  |   _  \  |  | |  |     |   ____|//
//|  \  /  | |  |  |  | |  |_)  | |  | |  |     |  |__   //
//|  |\/|  | |  |  |  | |   _  <  |  | |  |     |   __|  //
//|  |  |  | |  `--'  | |  |_)  | |  | |  `----.|  |____ //
//|__|  |__|  \______/  |______/  |__| |_______||_______|//

function selector(){
    $('button').click(function(){
        var section = $(this).html();
        $('.selector').html(section);
    });
}

function slide(){   
    $('.selector, #buttons').click(function(){
        $('#buttons').slideToggle('fast');
        //$('.selector').show();
    });

}

$('#ex').click(function(){
    $('#hover-box').hide();
});

$(document).ready(function(){
    slide();
    selector();
});
