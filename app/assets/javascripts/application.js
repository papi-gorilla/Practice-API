// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .

function initMap(){
  var DS = new google.maps.DirectionsService();
  var DR = new google.maps.DirectionsRenderer();

  // Google mapの表示
  var map = new google.maps.Map(document.getElementById("map"),{
    center: {lat: 35.170981, lng: 136.881556},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  DR.setMap(map);

  document.getElementById("route-btn").onclick = function search(){
    var wayptslist = document.getElementById("waypoint-list");
    var waypts = wayptslist.childNodes;
    waypoints = [];

    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;


    for (var u = 0; u<waypts.length; u++){
      waypoints.push({location: waypts[u].value, stopover: true});
    }

    var request = {
      origin: from,
      destination: to,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.DRIVING
    };

    DS.route(request, function(result, status){
      DR.setDirections(result);
    });
  }
  // document.getElementById("route-btn").onclick = function(){
  //   var from = document.getElementById("from").value;
  //   var to = document.getElementById("to").value;
  //   var waypoint = document.getElementById("input_data.id")

  //   var request = {
  //     origin: from,
  //     destination: to,
  //     travelMode: google.maps.TravelMode.DRIVING
  //   };

  //   DS.route(request, function(result, status){
  //     DR.setDirections(result);
  //   });
  // }
}

var i = 1;
function addForm(){
  if (i < 9){
    var input_data = document.createElement("input");
    input_data.type = "text";
    input_data.id = "inputform_"+ i;
      var parent = document.getElementById("waypoint-list");
      parent.appendChild(input_data);
    i++ ;
  };
}