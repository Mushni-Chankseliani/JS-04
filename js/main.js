const header = document.querySelector('header');

function changeBgImage(url) {
    header.style.backgroundImage = `url('${url}')`;
}

let currentIndex = 0;

const imagesArr = [
    'https://i.pinimg.com/originals/a9/bc/08/a9bc0805113ec1e08f668004a055512b.jpg',
    'https://wallpaperaccess.com/full/1925843.jpg',
    'https://i.ytimg.com/vi/FYNr2ByuROc/maxresdefault.jpg',
    'https://wallpapercave.com/wp/wp5422452.jpg'
]

function increaseIndex() {
    if (currentIndex === imagesArr.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    changeBgImage(imagesArr[currentIndex]);
}

function decreaseIndex() {
    if (currentIndex === 0) {
        currentIndex = imagesArr.length - 1;
    } else {
        currentIndex--;
    }
    changeBgImage(imagesArr[currentIndex]);
}

