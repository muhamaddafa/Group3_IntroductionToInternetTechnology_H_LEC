var char = document.querySelector("#char");
var star = document.querySelector("#star");
var box = document.querySelector("#gameBox");

window.addEventListener('load', () => {
    char.style.left = 0;
    char.style.top = 0;
    });

function checkForCollision(){

}

function moveUp() {
    char.style.top = parseInt(char.style.top) - 10 + 'px';
}
  
function moveDown() {
    char.style.top = parseInt(char.style.top) + 10 + 'px';
}
  
function moveLeft() {
    char.style.left = parseInt(char.style.left) - 10 + 'px';
}
  
function moveRight() {
    char.style.left = parseInt(char.style.right) + 10 + 'px';
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

function finish(){
    window.location.href = "play.html";
}

const btnSound = document.getElementById("btnSound");
const audio = document.getElementById("audio");

audio.volume = 0.15;s
btnSound.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    btnSound.classList.remove("sound-off");
    btnSound.classList.add("sound-on");
  } else {
    audio.pause();
    btnSound.classList.remove("sound-on");
    btnSound.classList.add("sound-off");
  }
});
