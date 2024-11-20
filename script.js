const sushiPhotos = [
    "sushiAlbum/sushi1.jpg",
    "sushiAlbum/sushi2.jpg",
    "sushiAlbum/sushi3.jpg",
    "sushiAlbum/sushi4.jpg",
    "sushiAlbum/sushi5.jpg",
    "sushiAlbum/sushi6.jpg",
    "sushiAlbum/sushi7.jpg",
    "sushiAlbum/sushi8.jpg",
    "sushiAlbum/sushi9.jpg",
    "sushiAlbum/sushi10.jpg",
    "sushiAlbum/sushi11.jpg",
    "sushiAlbum/sushi12.jpg",
    "sushiAlbum/sushi13.jpg",
    "sushiAlbum/sushi14.jpg",
    "sushiAlbum/sushi15.jpg"
];

const sushimiPhotos = [
    "sushimiAlbum/sushimi1.jpeg",
    "sushimiAlbum/sushimi2.JPG",
    "sushimiAlbum/sushimi3.jpg",
    "sushimiAlbum/sushimi4.jpg",
    "sushimiAlbum/sushimi5.jpg",
    "sushimiAlbum/sushimi6.jpg",
    "sushimiAlbum/sushimi7.jpg",
    "sushimiAlbum/sushimi8.jpg",
    "sushimiAlbum/sushimi9.jpg",
    "sushimiAlbum/sushimi10.jpg",
    "sushimiAlbum/sushimi11.jpg",
    "sushimiAlbum/sushimi12.jpg",
    "sushimiAlbum/sushimi13.jpg",
    "sushimiAlbum/sushimi14.jpg",
    "sushimiAlbum/sushimi15.jpg"
];

const sashimiPhotos = [
    "sashimiAlbum/sashimi1.jpg",
    "sashimiAlbum/sashimi2.jpg",
    "sashimiAlbum/sashimi3.jpg",
    "sashimiAlbum/sashimi4.jpg",
    "sashimiAlbum/sashimi5.jpg",
    "sashimiAlbum/sashimi6.jpg",
    "sashimiAlbum/sashimi7.jpg",
    "sashimiAlbum/sashimi8.jpg",
    "sashimiAlbum/sashimi9.jpg",
    "sashimiAlbum/sashimi10.jpg",
    "sashimiAlbum/sashimi11.jpg",
    "sashimiAlbum/sashimi12.jpg",
    "sashimiAlbum/sashimi13.jpg",
    "sashimiAlbum/sashimi14.jpg",
    "sashimiAlbum/sashimi15.jpg"
];

const sushiContainer = document.getElementById('sushiBox');
const sushimiContainer = document.getElementById('sushimiBox');
const sashimiContainer = document.getElementById('sashimiBox');

function loadImages(images, container) {
    let currentIndex = 0;

    const bgImageElement = document.createElement('div');
    bgImageElement.classList.add('backgroundImage');
    container.appendChild(bgImageElement);

    function changeImage() {
        const bgImage = images[currentIndex];

        bgImageElement.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            bgImageElement.style.backgroundImage = `url(${images[currentIndex]})`;
            
            bgImageElement.style.opacity = 1;
        }, 1000); 
    }

    bgImageElement.style.backgroundImage = `url(${images[currentIndex]})`;

    setInterval(changeImage, 5000); 
}

loadImages(sushiPhotos, sushiContainer);
loadImages(sushimiPhotos, sushimiContainer);
loadImages(sashimiPhotos, sashimiContainer);