// Random map generator

"use strict"

let map1
let map2

function initMap() {
  map1 = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: 51.478, lng: -0.002 },
    zoom: 8,
  })
  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 50, lng: -50 },
    zoom: 8,
  })
  map3 = new google.maps.Map(document.getElementById("map3"), {
    center: { lat: 25, lng: -25 },
    zoom: 8,
  })
  map4 = new google.maps.Map(document.getElementById("map4"), {
    center: { lat: 0, lng: -0.002 },
    zoom: 8,
  })
  map5 = new google.maps.Map(document.getElementById("map5"), {
    center: { lat: 23, lng: -20 },
    zoom: 8,
  })
  map6 = new google.maps.Map(document.getElementById("map6"), {
    center: { lat: 32, lng: 10 },
    zoom: 8,
  })
  map7 = new google.maps.Map(document.getElementById("map7"), {
    center: { lat: 16, lng: -65 },
    zoom: 8,
  })
  map8 = new google.maps.Map(document.getElementById("map8"), {
    center: { lat: -16, lng: 65 },
    zoom: 8,
  })
}
