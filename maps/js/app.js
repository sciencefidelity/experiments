// Random map generator

"use strict"

// const googleScript = document.createElement('script')
// googleScript.src = 'https://maps.googleapis.com/maps/api/js?key=GOOGLE_API_KEY&callback=initMap'
// googleScript.async = true

// Google Maps Platform

// let map1
// let map2
// let map3
// let map4
// let map5
// let map6
// let map7
// let map8
// let map9
// 
// function initMap() {
//   map1 = new google.maps.Map(document.getElementById("map1"), {
//     center: { lat: 51.478, lng: -0.002 },
//     zoom: 8,
//   })
//   map2 = new google.maps.Map(document.getElementById("map2"), {
//     center: { lat: 50, lng: -50 },
//     zoom: 8,
//   })
//   map3 = new google.maps.Map(document.getElementById("map3"), {
//     center: { lat: 25, lng: -25 },
//     zoom: 8,
//   })
//   map4 = new google.maps.Map(document.getElementById("map4"), {
//     center: { lat: 0, lng: -0.002 },
//     zoom: 8,
//   })
//   map5 = new google.maps.Map(document.getElementById("map5"), {
//     center: { lat: 23, lng: -20 },
//     zoom: 8,
//   })
//   map6 = new google.maps.Map(document.getElementById("map6"), {
//     center: { lat: 32, lng: 10 },
//     zoom: 8,
//   })
//   map7 = new google.maps.Map(document.getElementById("map7"), {
//     center: { lat: 16, lng: -65 },
//     zoom: 8,
//   })
//   map8 = new google.maps.Map(document.getElementById("map8"), {
//     center: { lat: -16, lng: 65 },
//     zoom: 8,
//   })
// }
// 
// document.head.appendChild(googleScript)

// Apple Maps

mapkit.init({
  authorizationCallback: function(done) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/services/jwt");
      xhr.addEventListener("load", function() {
          done(this.responseText);
      });
      xhr.send();
  }
});

let Cupertino = new mapkit.CoordinateRegion(
  new mapkit.Coordinate(37.3316850890998, -122.030067374026),
  new mapkit.CoordinateSpan(0.167647972, 0.354985255)
);
let map = new mapkit.Map("map1")
map.region = Cupertino
