(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([51.505, -0.09], 13);
    var marker = L.marker([38.531624, -121.743997]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var circle = L.circle([37.724674, -122.438379], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [38.649161, -121.552409],
        [38.546984, -121.575629],
        [38.366318, -121.410724],
        [38.571575, -121.328198],
        [38.656882, -121.103726],
        [38.810714, -121.312755]
    ]).addTo(map);
}());