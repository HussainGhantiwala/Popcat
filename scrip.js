//Refrence to DOM elements

const popcat=document.querySelector('.popcat')
const button=document.querySelector('.button')

//The two images of the pop CAT

const openMouthImg="./images/open.png";
const colseMouthImg="./images/close.png";

//The audio for each image when clicked

const openMouthSound= new Audio('./sound/sound-open.mp3')
const closeMouthSound= new Audio('./sound/sound-close.mp3')

//Event Handlers for PC'S and Laptops...

button.addEventListener('mousedown',openMouth)
button.addEventListener('mouseup',closeMouth)

//This event handler is for m obiles or any touch screen

button.addEventListener('touchstart', function(e){
    e.preventDefault();
    openMouth();
})
button.addEventListener('touchend', function(e){
    e.preventDefault();
    closeMouth();
})

//Funtion to switch through images when clicked on the button

function openMouth() {
    popcat.src=openMouthImg;
    openMouthSound.play()
}

function closeMouth(){
    popcat.src=colseMouthImg;
    closeMouthSound.play()
}