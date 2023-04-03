gameBar = "";
eatBar = "";
sleepBar = "";
level = 1;
keterangan = "";
hariBertahan = "";
hours = "";
minutes = "";

window.onload = function () {
  $(".btnPlay").click(function () {
    var namaPetHewan = $("#namaPetForm").val();
    var pilihan = $(".active img").attr("alt");
    if (namaPetHewan === "") {
      alert("Masukkan Nama");
      location.reload();
    } else {
      localStorage.setItem("pilihanUser", pilihan);
      localStorage.setItem("namaHewan", namaPetHewan);
      localStorage.setItem("gameStat", gameBar);
      localStorage.setItem("eatStat", eatBar);
      localStorage.setItem("sleepStat", sleepBar);
      localStorage.setItem("level", level);
      localStorage.setItem("keterangan", keterangan);
      localStorage.setItem("hours", hours);
      localStorage.setItem("minutes", minutes);
      localStorage.setItem("day", day);
    }
  });
};

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

$(".btnPlay").click(function () {
  window.location.href = "play.html";
});
