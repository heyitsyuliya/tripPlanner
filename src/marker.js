import mapboxgl from "mapbox-gl";

function buildMarker(marker){
  // when users specify marker
  // we will look up the marker in this object like this
  // markers[marker]
  const markers = {
    activity: 'https://i.imgur.com/WbMOfMl.png',
    hotel: 'https://i.imgur.com/D9574Cu.png',
    restaurant: 'https://i.imgur.com/D9574Cu.png'
  };

  // Insert your API key here
  mapboxgl.accessToken = "";

  const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  });

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${markers[marker]})`;

  new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
};

export default buildMarker;
