import mapboxgl from "mapbox-gl";
//function to create a new marker and assign height as 39, width as 32 with respective bg image.
// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

//take in activity, long, lat
export function markerMaker(long = -74, lat = 40) {
  console.log("hello from MarkerMaker!");
  const markerEl = document.createElement("div");
  markerEl.style.width = "1000px";
  markerEl.style.height = "1000px";
  markerEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  //this.act;
  markerItem = mapboxgl.Marker(markerEl).setLngLat([this.long, this.lat]);
  return markerItem;
}
