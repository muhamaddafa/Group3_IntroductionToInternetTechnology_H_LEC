var pilihanUser = localStorage.getItem("pilihanUser");
var namaPet = localStorage.getItem("namaPet");
var eatBar = 100;
var sleepBar = 100;
var gameBar = 100;
var healthBar = 100;
var minutes = 0;
var hours = 0;
var hariBertahan = 0;
var level = 1;
var keterangan = "Baby";

console.log(minutes);
// Char User
var gambar = $("<img/>", {
  class: "imagePilihan",
  src: "Asset/img/Character/Bayi_" + pilihanUser + ".svg",
});
$(".charPilihan").append(gambar);

// Salam
var salam = $("<p/>", {
  class: salam,
});

// Button Regen
$(".btnEat").click(function () {
  eatBar = eatBar + 20;
  $("#statsEat").attr("style", "width: " + eatBar + "%");
});

$(".btnSleep").click(function () {
  sleepBar = sleepBar + 70;
  $("#statsEat").attr("style", "width: " + sleepBar + "%");
});

$(".btnHealth").click(function () {
  healthBar = healthBar + 20;
  $("#statsEat").attr("style", "width: " + healthBar + "%");
});

// Clock
function clock() {
  minutes += 1;
  if (minutes >= 60) {
    hours++;
    minutes -= 60;
  }
  if (hours === 24) {
    hours = 0;
    hariBertahan++;
  }

  if (hariBertahan > 0 && hariBertahan < 2) {
    level = 2;
    keterangan = "Anak";
    $(".levelUser").text("Level " + level + " - " + keterangan);
    $(".imagePilihan").attr("src", "Asset/img/Character/Anak_" + pilihanUser + ".svg");
  } else if (hariBertahan > 2) {
    level = 3;
    keterangan = "Dewasa";
    $(".levelUser").text("Level " + level + " - " + keterangan);
    $(".imagePilihan").attr("src", "Asset/img/Character/Dewasa_" + pilihanUser + ".svg");
  }

  var textWaktu = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  $(".jam").text(textWaktu);
  var clockTime = parseInt(hours.toString().padStart(2, "0") + minutes.toString().padStart(2, "0"));
  if (clockTime >= 2100 || clockTime < 400) {
    salam.text("Good Night, " + namaPet);
    $(".greeting").append(salam);
    $("#bungkus").removeClass();
    $("#bungkus").addClass("bgImageMalam py-5 text-center");
    $("#pesan").addClass("text-light");
    $("#textLogo").addClass("text-light");
  } else if (clockTime >= 400 && clockTime < 1100) {
    salam.text("Good Morning, " + namaPet);
    $(".greeting").append(salam);
    $("#bungkus").removeClass();
    $("#bungkus").addClass("bgImagePagi py-5 text-center");
    $("#pesan").removeClass();
    $("#textLogo").removeClass();
  } else if (clockTime >= 1100 && clockTime < 1500) {
    salam.text("Good Afternoon, " + namaPet);
    $(".greeting").append(salam);
    $("#bungkus").removeClass();
    $("#bungkus").addClass("bgImageSiang py-5 text-center");
    $("#pesan").removeClass();
    $("#textLogo").removeClass();
  } else if (clockTime >= 1500 && clockTime < 2100) {
    salam.text("Good Evening, " + namaPet);
    $(".greeting").append(salam);
    $("#bungkus").removeClass();
    $("#bungkus").addClass("bgImageSore py-5 text-center");
    $("#pesan").addClass("text-light");
    $("#textLogo").addClass("text-light");
  }
}
intervalClock = setInterval(clock, 300);

// Code Dibawah ga jalan???????
if (level === 1) {
  // Level 1
  var eatBarIntv = setInterval(penguranganEatBar, 700);
  function penguranganEatBar() {
    eatBar = eatBar - 1;
    $("#statsEat").attr("style", "width: " + eatBar + "%");
    if (eatBar === 0) {
      clearInterval(eatBarIntv);
    }
  }

  var sleepBarIntv = setInterval(penguranganSleepBar, 1000);
  function penguranganSleepBar() {
    sleepBar = sleepBar - 1;
    $("#sleepBar").attr("style", "width: " + sleepBar + "%");
    if (sleepBar === 0) {
      clearInterval(sleepBarIntv);
    }
  }

  var gameBarIntv = setInterval(penguranganGameBar, 1500);
  function penguranganGameBar() {
    gameBar = gameBar - 1;
    $("#gameBar").attr("style", "width: " + gameBar + "%");
    if (gameBar === 0) {
      clearInterval(gameBarIntv);
    }
  }

  var healthBarIntv = setInterval(penguranganHealthBar, 1000);
  function penguranganHealthBar() {
    if (sleepBar === 0) {
      healthBar = healthBar - 5;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (eatBar === 0) {
      healthBar = healthBar - 2;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (gameBar === 0) {
      healthBar = healthBar - 1;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (healthBar <= 0) {
      clearInterval(healthBarIntv);
      clearInterval(eatBarIntv);
      clearInterval(gameBarIntv);
      clearInterval(sleepBarIntv);
      clearInterval(intervalClock);
      alert("You Die!!!!!");
      $("#healthBar").attr("style", "width: " + 0 + "%");
      $("#statsEat").attr("style", "width: " + 0 + "%");
      $("#gameBar").attr("style", "width: " + 0 + "%");
      $("#sleepBar").attr("style", "width: " + 0 + "%");
    }
  }
  // Akhir Level 1
} else if (level === 2) {
  // Level 2
  var eatBarIntv = setInterval(penguranganEatBar, 1000);
  function penguranganEatBar() {
    eatBar = eatBar - 1;
    $("#statsEat").attr("style", "width: " + eatBar + "%");
    if (eatBar === 0) {
      clearInterval(eatBarIntv);
    }
  }

  var sleepBarIntv = setInterval(penguranganSleepBar, 1200);
  function penguranganSleepBar() {
    sleepBar = sleepBar - 1;
    $("#sleepBar").attr("style", "width: " + sleepBar + "%");
    if (sleepBar === 0) {
      clearInterval(sleepBarIntv);
    }
  }

  var gameBarIntv = setInterval(penguranganGameBar, 800);
  function penguranganGameBar() {
    gameBar = gameBar - 1;
    $("#gameBar").attr("style", "width: " + gameBar + "%");
    if (gameBar === 0) {
      clearInterval(gameBarIntv);
    }
  }

  var healthBarIntv = setInterval(penguranganHealthBar, 1000);
  function penguranganHealthBar() {
    if (sleepBar === 0) {
      healthBar = healthBar - 5;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (eatBar === 0) {
      healthBar = healthBar - 2;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (gameBar === 0) {
      healthBar = healthBar - 1;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (healthBar <= 0) {
      clearInterval(healthBarIntv);
      clearInterval(eatBarIntv);
      clearInterval(gameBarIntv);
      clearInterval(sleepBarIntv);
      clearInterval(intervalClock);
      alert("You Die!!!!!");
      $("#healthBar").attr("style", "width: " + 0 + "%");
      $("#statsEat").attr("style", "width: " + 0 + "%");
      $("#gameBar").attr("style", "width: " + 0 + "%");
      $("#sleepBar").attr("style", "width: " + 0 + "%");
    }
  }
  // Akhir Level 2
} else {
  // Level 3
  var eatBarIntv = setInterval(penguranganEatBar, 800);
  function penguranganEatBar() {
    eatBar = eatBar - 1;
    $("#statsEat").attr("style", "width: " + eatBar + "%");
    if (eatBar === 0) {
      clearInterval(eatBarIntv);
    }
  }

  var sleepBarIntv = setInterval(penguranganSleepBar, 700);
  function penguranganSleepBar() {
    sleepBar = sleepBar - 1;
    $("#sleepBar").attr("style", "width: " + sleepBar + "%");
    if (sleepBar === 0) {
      clearInterval(sleepBarIntv);
    }
  }

  var gameBarIntv = setInterval(penguranganGameBar, 2000);
  function penguranganGameBar() {
    gameBar = gameBar - 1;
    $("#gameBar").attr("style", "width: " + gameBar + "%");
    if (gameBar === 0) {
      clearInterval(gameBarIntv);
    }
  }

  var healthBarIntv = setInterval(penguranganHealthBar, 1000);
  function penguranganHealthBar() {
    if (sleepBar === 0) {
      healthBar = healthBar - 5;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (eatBar === 0) {
      healthBar = healthBar - 2;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (gameBar === 0) {
      healthBar = healthBar - 1;
      $("#healthBar").attr("style", "width: " + healthBar + "%");
    }
    if (healthBar <= 0) {
      clearInterval(healthBarIntv);
      clearInterval(eatBarIntv);
      clearInterval(gameBarIntv);
      clearInterval(sleepBarIntv);
      clearInterval(intervalClock);
      alert("You Die!!!!!");
      $("#healthBar").attr("style", "width: " + 0 + "%");
      $("#statsEat").attr("style", "width: " + 0 + "%");
      $("#gameBar").attr("style", "width: " + 0 + "%");
      $("#sleepBar").attr("style", "width: " + 0 + "%");
    }
  }
  // Akhir Level 3
}
