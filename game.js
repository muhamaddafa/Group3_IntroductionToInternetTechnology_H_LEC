const btnSound = document.getElementById("btnSound");
const audio = document.getElementById("audio");

audio.volume = 0.15;
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

window.onload = function(){
    var gambar = $("<img/>", {
        class: "imagePilihan",
        src: "Asset/img/Character/Bayi_" + pilihanUser + ".svg",
      });
      $(".charPilihan").append(gambar);
};

function moveUp() {
    myGamePiece.speedY -= 1;
  }
  
function moveDown() {
    myGamePiece.speedY += 1;
}
  
function moveLeft() {
    myGamePiece.speedX -= 1;
}
  
function moveRight() {
    myGamePiece.speedX += 1;
}