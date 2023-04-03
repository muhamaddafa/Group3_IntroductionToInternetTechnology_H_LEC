var char = document.querySelector("#char");
var star = document.querySelector("#star");
var box = document.querySelector("#gameBox");
var gameStat = parseInt(localStorage.getItem("gameStat"));
var eatStat = parseInt(localStorage.getItem("eatStat"));
var sleepStat = parseInt(localStorage.getItem("sleepStat"));
var level = parseInt(localStorage.getItem("level"));
var keterangan = localStorage.getItem("keterangan");
var hours = parseInt(localStorage.getItem("hours"));
var minutes = parseInt(localStorage.getItem("minutes"));
var hariBertahan = parseInt(localStorage.getItem("day"));
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

  if (charPos.left < starPos.right && charPos.right > starPos.left && charPos.top < starPos.bottom && charPos.bottom > starPos.top) {
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

  star.style.left = posX + "px";
  star.style.top = posY + "px";
}

window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 65:
      char.style.left = parseInt(char.style.left) - 10 + "px";
      if (parseInt(char.style.left) < 0) {
        char.style.left = 0;
      }
      char.style.transform = "scaleX(-1)";
      checkForCollision();
      break;
    case 68:
      char.style.left = parseInt(char.style.left) + 10 + "px";
      if (parseInt(char.style.left) > 830) {
        char.style.left = parseInt(char.style.left) - 10 + "px";
      }
      char.style.transform = "scaleX(1)";
      checkForCollision();
      break;
    case 87:
      char.style.top = parseInt(char.style.top) - 10 + "px";
      if (parseInt(char.style.top) < 0) {
        char.style.top = 0;
      }
      checkForCollision();
      break;
    case 83:
      char.style.top = parseInt(char.style.top) + 10 + "px";
      if (parseInt(char.style.top) > 150) {
        char.style.top = parseInt(char.style.top) - 10 + "px";
      }
      checkForCollision();
      break;
    default:
      break;
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
    char.style.transform = "scaleX(-1)";
    checkForCollision();
  }
  
  function moveRight() {
      char.style.transform = "scaleX(1)";
      char.style.left = parseInt(char.style.left) + 10 + "px";
      if (parseInt(char.style.left) > 830) {
        char.style.left = parseInt(char.style.left) - 10 + 'px';
      }  
      checkForCollision();
  }

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
  const timer = document.querySelector("#timer");
  timer.textContent = `Time left: ${time}s`;
  if (time === 0) {
    clearInterval(timerInterval);
    alert("Game over!");
    finish();
  } else {
    time--;
    gameStat = gameStat + 1;
    eatStat = eatStat - 1;
    sleepStat = sleepStat - 1;
    $("#gameBar").attr("style", "width: " + gameStat + "%; transition: 0.5s ease-in-out;");
    $("#sleepBar").attr("style", "width: " + sleepStat + "%; transition: 0.5s ease-in-out;");
    $("#statsEat").attr("style", "width: " + sleepStat + "%; transition: 0.5s ease-in-out;");
    $(".levelUser").text("Level " + level + " - " + keterangan + " " + "(Day " + (hariBertahan + 1) + ")");
  }
}

function finish() {
  localStorage.setItem("gameStat", gameBar);
  localStorage.setItem("eatStat", eatStat);
  localStorage.setItem("sleepStat", sleepStat);
  localStorage.setItem("level", level);
  localStorage.setItem("keterangan", keterangan);
  localStorage.setItem("hours", hours);
  localStorage.setItem("minutes", minutes);
  localStorage.setItem("day", hariBertahan);
  window.location.href = "play.html";
}
