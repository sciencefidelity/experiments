// Random map generator
// <reference types="google.maps" />

const zoom = 10
const lat: number[] = []
const lgn: number[] = []

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
  const map1Ignored: google.maps.Map = new google.maps.Map(
    document.querySelector("#map1") as HTMLDivElement,
    {
      center: { lat: lat[0], lng: lgn[0] },
      zoom: zoom
    }
  )
  const map2Ignored: google.maps.Map = new google.maps.Map(
    document.querySelector("#map2") as HTMLDivElement,
    {
      center: { lat: lat[1], lng: lgn[1] },
      zoom: zoom
    }
  )
  const map3Ignored: google.maps.Map = new google.maps.Map(
    document.querySelector("#map3") as HTMLDivElement,
    {
      center: { lat: lat[2], lng: lgn[2] },
      zoom: zoom
    }
  )
  const map4Ignored: google.maps.Map = new google.maps.Map(
    document.querySelector("#map4") as HTMLDivElement,
    {
      center: { lat: lat[3], lng: lgn[3] },
      zoom: zoom
    }
  )
  const map5Ignored: google.maps.Map = new google.maps.Map(
    document.querySelector("#map5") as HTMLDivElement,
    {
      center: { lat: lat[4], lng: lgn[4] },
      zoom: zoom
    }
  )
  const map6Ignored: google.maps.Map = new google.maps.Map(
    document.querySelector("#map6") as HTMLDivElement,
    {
      center: { lat: lat[5], lng: lgn[5] },
      zoom: zoom
    }
  )
  const map7Ignored: google.maps.Map = new google.maps.Map(
    document.querySelector("#map7") as HTMLDivElement,
    {
      center: { lat: lat[6], lng: lgn[6] },
      zoom: zoom
    }
  )
  const map8Ignored: google.maps.Map = new google.maps.Map(
    document.querySelector("#map8") as HTMLDivElement,
    {
      center: { lat: lat[7], lng: lgn[7] },
      zoom: zoom
    }
  )
}

initMap()

export {}
