
//Mapbox API JS
mapboxgl.accessToken = 'pk.eyJ1IjoicnRhbnJpIiwiYSI6ImNrZXpzejczZTBjc2wydG54azd1eXhlb2oifQ.rNpvr8m6Lw-fuEcVV9R7kA';

var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/rtanri/ckf0fx9d21dh919pjbdp6y0qs', // stylesheet location
    style: 'mapbox://styles/rtanri/ckf0fx9d21dh919pjbdp6y0qs', // stylesheet location
    center: [103.826600, 1.339800], // starting position [lng, lat]
    zoom: 11 // starting zoom
    }
)
// center: [restaurant.latlng.lat, restaurant.latlng.lng],


// Try to Add Marker of the landmark
var LadyM = new mapboxgl.Marker({color:'red'})
    .setLngLat([103.839820, 1.300857])
    .addTo(map);

var CakeSpade = new mapboxgl.Marker({color:'red'})
    .setLngLat([103.843783, 1.277824])
    .addTo(map);


