// Random map generator
// <reference types="google.maps" />

const zoom = 10
const lat: number[] = []
const lgn: number[] = []
let _map1: google.maps.Map
let _map2: google.maps.Map
let _map3: google.maps.Map
let _map4: google.maps.Map
let _map5: google.maps.Map
let _map6: google.maps.Map
let _map7: google.maps.Map
let _map8: google.maps.Map

// Random number generator

function rand(min: number, max: number) {
  return (
    ((Math.pow(10, 14) * Math.random() * Math.random()) % (max - min + 1)) + min
  )
}

for (let i = 0; i < 8; i++) {
  lat.push(Number(rand(-84, 84).toFixed(3)))
  lgn.push(Number(rand(-180, 180).toFixed(3)))
}

// Google Maps generator

function initMap(): void {
  _map1 = new google.maps.Map(
    document.querySelector("#map1") as HTMLDivElement,
    {
      center: { lat: lat[0], lng: lgn[0] },
      zoom: zoom
    }
  )
  _map2 = new google.maps.Map(
    document.querySelector("#map2") as HTMLDivElement,
    {
      center: { lat: lat[1], lng: lgn[1] },
      zoom: zoom
    }
  )
  _map3 = new google.maps.Map(
    document.querySelector("#map3") as HTMLDivElement,
    {
      center: { lat: lat[2], lng: lgn[2] },
      zoom: zoom
    }
  )
  _map4 = new google.maps.Map(
    document.querySelector("#map4") as HTMLDivElement,
    {
      center: { lat: lat[3], lng: lgn[3] },
      zoom: zoom
    }
  )
  _map5 = new google.maps.Map(
    document.querySelector("#map5") as HTMLDivElement,
    {
      center: { lat: lat[4], lng: lgn[4] },
      zoom: zoom
    }
  )
  _map6 = new google.maps.Map(
    document.querySelector("#map6") as HTMLDivElement,
    {
      center: { lat: lat[5], lng: lgn[5] },
      zoom: zoom
    }
  )
  _map7 = new google.maps.Map(
    document.querySelector("#map7") as HTMLDivElement,
    {
      center: { lat: lat[6], lng: lgn[6] },
      zoom: zoom
    }
  )
  _map8 = new google.maps.Map(
    document.querySelector("#map8") as HTMLDivElement,
    {
      center: { lat: lat[7], lng: lgn[7] },
      zoom: zoom
    }
  )
}

initMap()

export {}
