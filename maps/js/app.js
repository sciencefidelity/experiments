
// Random map generator

"use strict"

const googleScript = document.createElement('script')
googleScript.src = 'https://maps.googleapis.com/maps/api/js?key=GOOGLE_API_KEY&callback=initMap'
googleScript.async = true

const zoom = 10
let lat = []
let lgn = []
let map1, map2, map3, map4, map5, map6, map7, map8, map9

// Random number generator

function rand(min, max){
  return (Math.pow(10,14)*Math.random()
  *Math.random())%(max-min+1)+min
}

for (let i = 0; i < 8; i++) {
  lat.push(Number(rand(-84, 84).toFixed(3)))
  lgn.push(Number(rand(-180, 180).toFixed(3)))
}

// Google Maps Platform

function initMap() {
  map1 = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: lat[0], lng: lgn[0] },
    zoom: zoom,
  })
  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: lat[1], lng: lgn[1] },
    zoom: zoom,
  })
  map3 = new google.maps.Map(document.getElementById("map3"), {
    center: { lat: lat[2], lng: lgn[2] },
    zoom: zoom,
  })
  map4 = new google.maps.Map(document.getElementById("map4"), {
    center: { lat: lat[3], lng: lgn[3] },
    zoom: zoom,
  })
  map5 = new google.maps.Map(document.getElementById("map5"), {
    center: { lat: lat[4], lng: lgn[4] },
    zoom: zoom,
  })
  map6 = new google.maps.Map(document.getElementById("map6"), {
    center: { lat: lat[5], lng: lgn[5] },
    zoom: zoom,
  })
  map7 = new google.maps.Map(document.getElementById("map7"), {
    center: { lat: lat[6], lng: lgn[6] },
    zoom: zoom,
  })
  map8 = new google.maps.Map(document.getElementById("map8"), {
    center: { lat: lat[7], lng: lgn[7] },
    zoom: zoom,
  })
}

document.head.appendChild(googleScript)
