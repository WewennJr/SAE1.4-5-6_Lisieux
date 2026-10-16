const mainElement = document.querySelector('.index-principal-presentation');
const images = ["basilique.png", "basilique_inside.png", "fond_presentation.png", "lisieux1.png"];
let currentImageIndex = 0;
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        changeBackgroundImage();
    }, 10000); // on execute le code toutes les 10 secondes
    changeBackgroundImage();

    if (!document.getElementById('map')) return;

    let map = L.map('map').setView([49.14, 0.23], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const carousel = new bootstrap.Carousel('#carrousel');

    let basiliqueMarker = L.marker([49.140, 0.235], {
        icon: L.divIcon({
            className:'custom-div-icon',
            html:'<div style="font-size: 24px;">⛪</div>',
        })
    }).addTo(map)
        .bindPopup('Basilique Sainte-Thérèse de Lisieux');
    basiliqueMarker.on('click', function () {
        carousel.to(0);
    });

    let chateauMarker = L.marker([49.14753484986092, 0.22594734891525864], {
        icon: L.divIcon({
            className:'custom-div-icon',
            html:'<div style="font-size: 24px;">🏰</div>',
        })
    }).addTo(map)
        .bindPopup('Cathédrale Saint-Pierre de Lisieux');
    chateauMarker.on('click', function () {
        carousel.to(1);
    });

    let carmelMarker = L.marker([49.142, 0.228], {
        icon: L.divIcon({
            className:'custom-div-icon',
            html:'<div style="font-size: 24px;">🕍</div>',
        })
    }).addTo(map)
        .bindPopup('Carmel de Lisieux');
    carmelMarker.on('click', function () {
        carousel.to(2);
    });
});


function changeBackgroundImage() {

    mainElement.style.transition ='background-color 0.5s linear';
    mainElement.style.backgroundColor ='rgba(0,0,0, 1)';

    setTimeout(() => {
        mainElement.style.backgroundImage = `url('images/backgrounds/${images[currentImageIndex]}')`;
        mainElement.style.backgroundColor ='rgba(0,0,0, 0.1)';
        currentImageIndex = (currentImageIndex + 1) % images.length; // passer à l'image suivante en boucle (et revenir au début avec modulo)
    }, 600);
}