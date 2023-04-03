var char = document.querySelector("#char");
var star = document.querySelector("#star");
var box = document.querySelector("#gameBox");
var time = 30;
var moveInterval;
var timerInterval = setInterval(timer, 1000);
const btnSound = document.getElementById("btnSound");
const audio = document.getElementById("audio");
audio.volume = 0.15;

window.addEventListener("load", () => {
  char.style.left = 0;
  char.style.top = 0;
});

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

function checkForCollision() {
    const charPos = char.getBoundingClientRect();
    const starPos = star.getBoundingClientRect();
    
    if (charPos.left < starPos.right &&
        charPos.right > starPos.left &&
        charPos.top < starPos.bottom &&
        charPos.bottom > starPos.top) {
        randPos();
    }
}

function randPos() {
    const max = box.getBoundingClientRect();
    const min = star.getBoundingClientRect();
  
    const maxWidth = max.width - min.width;
    const maxHeight = max.height - min.height;
  
    const posX = Math.floor(Math.random() * maxWidth);
    const posY = Math.floor(Math.random() * maxHeight);
  
    star.style.left = posX + 'px';
    star.style.top = posY + 'px';
}

window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 37:
            char.style.left = parseInt(char.style.left) - 10 + 'px';
            if (parseInt(char.style.left) < 0) {
                char.style.left = 0;
            }  
            char.style.transform = "scaleX(1)";
            checkForCollision();
            break;
        case 39:
            char.style.left = parseInt(char.style.left) + 10 + 'px';
            if (parseInt(char.style.left) > 550) {
                char.style.left = parseInt(char.style.left) - 10 + 'px';
            } 
            char.style.transform = "scaleX(-1)";
            checkForCollision();
            break;
        case 38:
            char.style.top = parseInt(char.style.top) - 10 + 'px';
            if (parseInt(char.style.top) < 0) {
                char.style.top = 0;
            }
            checkForCollision();
            break;
        case 40:
            char.style.top = parseInt(char.style.top) + 10 + 'px';
            if (parseInt(char.style.top) > 150) {
                char.style.top = parseInt(char.style.top) - 10 + 'px';
            } 
            checkForCollision();
            break;
        default: break;
    }
});

function moveUp() {
  char.style.top = parseInt(char.style.top) - 10 + "px";
  if (parseInt(char.style.top) < 0) {
  char.style.top = 0;
}
  checkForCollision();
}

function moveDown() {
  char.style.top = parseInt(char.style.top) + 10 + "px";
  if (parseInt(char.style.top) > 240) {
  char.style.top = parseInt(char.style.top) - 10 + 'px';
}
  checkForCollision();
}

function moveLeft() {
  char.style.left = parseInt(char.style.left) - 10 + "px";
  if (parseInt(char.style.left) < 0) {
    char.style.left = 0;
  }  
  char.style.transform = "scaleX(1)";
  checkForCollision();
}

function moveRight() {
  char.style.left = parseInt(char.style.left) + 10 + "px";
  if (parseInt(char.style.left) > 830) {
  char.style.left = parseInt(char.style.left) - 10 + 'px';
   
  char.style.transform = "scaleX(-1)";
  checkForCollision();
}}

function startMoveUp() {
  moveInterval = setInterval(moveUp, 50); 
}
  
function startMoveDown() {
  moveInterval = setInterval(moveDown, 50); 
}
  
function startMoveRight() {
  moveInterval = setInterval(moveRight, 50); 
}
  
function startMoveLeft() {
  moveInterval = setInterval(moveLeft, 50); 
}

function stopMove() {
    clearInterval(moveInterval);
}

function timer() {
    const timer = document.querySelector('#timer');
    timer.textContent = `Time left: ${time}s`;
    if (time === 0) {
        clearInterval(timerInterval);
        alert('Game over!');
        finish();
    } else {
        time--;
    }
}

function finish() {
  window.location.href = "play.html";
}