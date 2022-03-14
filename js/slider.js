const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg'
];

let imgIndex = 0;

const initialSlider = document.getElementById('img-slider');

setInterval(() => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    else{
        const imgUrl = images[imgIndex];
        initialSlider.setAttribute('src', imgUrl); 
        imgIndex++;
    }
},1500)