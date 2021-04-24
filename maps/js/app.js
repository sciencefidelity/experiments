// Random map generator

"use strict"

let map1
let map2

function initMap() {
  map1 = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: 51.478, lng: -0.002 },
    zoom: 15,
  })
  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 0, lng: -0.002 },
    zoom: 15,
  })
}
