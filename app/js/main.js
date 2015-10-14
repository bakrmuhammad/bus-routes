'use strict';

//what readers see first
//Bus Routes
function defaultBusRouteColor(feature, layer) {
  return{ color: feature.properties.stroke};
}

var busFeature = L.geoJson(busRoutes, {
  style: defaultBusRouteColor,
  onEachFeature : $onEachFeature
});

busFeature.addTo(map);

///////////////////
//Button controls//
//////////////////

//bus stop issue
$('#1').click(function(){
  clearLayer();
  busStopIssue.addTo(map);
});
//capacity
$('#2').click(function(){
var newColor = '#8e420d'
  clearLayer();
  capacity.addTo(map);
});
//cleanlieness
$('#3').click(function(){
  clearLayer();
  cleanlieness.addTo(map);

});
//no stop
$('#4').click(function(){
  clearLayer();
  noStop.addTo(map);
});
//driver conduct
$('#5').click(function(){
  clearLayer();
  driverConduct.addTo(map);

});
//fares
$('#6').click(function(){
  clearLayer();
  fares.addTo(map);
});
//maintenance
$('#7').click(function(){
  clearLayer();
  maintenance.addTo(map);

});
//passenger conduct
$('#8').click(function(){
  clearLayer();
  passenger.addTo(map);
});
//misc
$('#9').click(function(){
  clearLayer();
  misc.addTo(map);
});
//praise
$('#10').click(function(){
  clearLayer();
  praise.addTo(map);
});
//schedule
$('#11').click(function(){
  clearLayer();
  safety.addTo(map);
});
//Safety
$('#12').click(function(){
  clearLayer();
  schedule.addTo(map);
});

//reset
$('#reset').click(function(){
  clearLayer();
  busFeature.addTo(map);
});

//to get rid of hover box when not in map
$('#map-container').mouseleave(function(){
  $('#hover-box').hide();
});