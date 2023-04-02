window.onload = function () {
  $(".btnPlay").click(function () {
    var pilihan = $(".active img").attr("alt");
    var namaPet = $("#namaPetForm").val();
    localStorage.setItem("pilihanUser", pilihan);
    localStorage.setItem("namaPet", namaPet);
  });
  let bgmusic = $("#bgmusic")[0];
  bgmusic.play();
  bgmusic.volume = 0.15;
};

$(".btnPlay").click(function () {
  window.location.href = "play.html";
});
