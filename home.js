window.onload = function () {
  $(".btnPlay").click(function () {
    var pilihan = $(".active img").attr("alt");
    var namaPet = $("#namaPetForm").val();
    localStorage.setItem("pilihanUser", pilihan);
    localStorage.setItem("namaPet", namaPet);
  });
};

const btnSound = document.getElementById("btnSound");
const audio = document.getElementById("audio");

audio.volume = 0.15;
btnSound.addEventListener("click", function() {
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

$(".btnPlay").click(function () {
  window.location.href = "play.html";
});