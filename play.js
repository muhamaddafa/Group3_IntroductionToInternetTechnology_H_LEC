var pilihanUser = localStorage.getItem("pilihanUser");

var gambar = $("<img/>", {
    class: "imagePilihan",
    src: "Asset/img/Character/Anak_" + pilihanUser + ".svg"
})
$(".charPilihan").append(gambar);