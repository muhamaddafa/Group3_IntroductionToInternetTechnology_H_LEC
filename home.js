window.onload = function () {
    $(".btnPlay").click(function () {
        var pilihan =  $(".active img").attr("alt");
        var namaPet = $("#namaPetForm").val();
        localStorage.setItem("pilihanUser",pilihan);
        localStorage.setItem("namaPet", namaPet);
    });
}