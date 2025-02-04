class leafLetMap{
    constructor(containerId, center, zoom){
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
    }

initTileLayer() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
    }).addTo(this.map);
}

addMarker(lat, long, message){
    const marker = L.marker([lat, long]).addTo(this.map)
    .bindPopup(message);
}
loadMarkersFromJson(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(marker => {
            this.addMarker(marker.latitude, marker.longitude, marker.message);
        });
    })
    .catch(error => console.error("Error Loading servers:", error));
}



}
const Mymap = new leafLetMap('map', [8.359735, 124.869206], 18);



Mymap.addMarker(8.359735, 124.869206, 'CCS Faculty Office');
Mymap.addMarker(8.359554, 124.869153, 'Sc Building');
Mymap.addMarker(8.359554, 124.869153, 'CCS Laborotories 2');


Mymap.loadMarkersFromJson('map.json');
