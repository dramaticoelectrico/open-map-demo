var map = new L.Map("map", {
    center: new L.LatLng(41.88, -87.62),
    zoom: 16
});
map.addLayer(new L.StamenTileLayer("toner", {
    detectRetina: true
}));