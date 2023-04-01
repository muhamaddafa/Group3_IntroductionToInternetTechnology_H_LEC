window.onload = function () {
    $(".btnPlay").click(function () {
        pilihan =  $(".active img").attr("alt");
        localStorage.setItem("pilihanUser",pilihan);
        return pilihan;
    });
    
}



