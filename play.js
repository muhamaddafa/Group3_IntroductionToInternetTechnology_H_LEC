var pilihanUser = localStorage.getItem("pilihanUser");
var namaPet = localStorage.getItem("namaPet");
var eatBar = 50;
var sleepBar = 50;
var gameBar = 50;
var healthBar = 100;
var minutes = 0;
var hours = 0;
var hariBertahan = 0;
var level = 1;
var keterangan = "Bayi";

// Char User
var gambar = $("<img/>", {
  class: "imagePilihan",
  src: "Asset/img/Character/" + keterangan + "_" + pilihanUser + ".svg",
});
$(".charPilihan").append(gambar);

// Salam
var salam = $("<p/>", {
  class: salam,
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
    if (hariBertahan > 0 && hariBertahan <= 2) {
      keterangan = "Anak";
    } else if (hariBertahan > 2) {
      keterangan = "Dewasa";
    }
    $(".imagePilihan").attr("src", "Asset/img/Character/" + keterangan + "_" + pilihanUser + ".svg");
  }
  if (hariBertahan > 0 && hariBertahan <= 2) {
    level = 2;
    $(".levelUser").text("Level " + level + " - " + keterangan + " " + "(Day " + (hariBertahan + 1) + ")");
  } else if (hariBertahan > 2) {
    level = 3;
    keterangan = "Dewasa";
    $(".levelUser").text("Level " + level + " - " + keterangan + " " + "(Day " + (hariBertahan + 1) + ")");
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

var intervalClock = setInterval(clock, 100);
var eatBarIntv = setInterval(penguranganEatBar, 1000);
var healthBarIntv = setInterval(penguranganHealthBar, 1000);
var gameBarIntv = setInterval(penguranganGameBar, 1000);
var sleepBarIntv = setInterval(penguranganSleepBar, 1500);

$(".btnGame").click(function () {
  window.location.href = "game.html";
});

$(".btnEat").click(function () {
  eatBar = eatBar + 20;
  if (eatBar > 100) {
    eatBar = 101;
    $("#statsEat").attr("style", "width: " + eatBar + "%; transition: 0.5s ease-in-out;");
    alert("Sudah Kenyang");
  } else {
    $("#statsEat").attr("style", "width: " + eatBar + "%; transition: 0.5s ease-in-out;");
  }
  if (level === 1) {
    $(".imagePilihan").attr("src", "Asset/img/Character/Bayi_" + pilihanUser + "_Eat" + ".svg");
  }
  if (level === 2) {
    $(".imagePilihan").attr("src", "Asset/img/Character/Anak_" + pilihanUser + "_Eat" + ".svg");
  }
  if (level === 3) {
    $(".imagePilihan").attr("src", "Asset/img/Character/Dewasa_" + pilihanUser + "_Eat" + ".svg");
  }
  $("#btnEat").addClass("disabled");
  let cepetMakan = setInterval(clock, 10);
  setTimeout(function () {
    if (level === 1) {
      $(".imagePilihan").attr("src", "Asset/img/Character/Bayi_" + pilihanUser + ".svg");
    } else if (level === 2) {
      $(".imagePilihan").attr("src", "Asset/img/Character/Anak_" + pilihanUser + ".svg");
    } else {
      $(".imagePilihan").attr("src", "Asset/img/Character/Dewasa_" + pilihanUser + ".svg");
    }
    clearInterval(cepetMakan);
    let backMakan = setInterval(clock, 100);
    clearInterval(backMakan);
    $("#btnEat").removeClass("disabled");
  }, 500);
});

function penguranganEatBar() {
  if (level === 1) {
    eatBar = eatBar - 1;
  } else if (level === 2) {
    eatBar = eatBar - 2;
  } else {
    eatBar = eatBar - 3;
  }
  $("#statsEat").attr("style", "width: " + eatBar + "%");
  if (eatBar <= 0) {
    $("#statsEat").attr("style", "width: " + 0 + "%");
  }
}

$(".btnSleep").click(function () {
  sleepBar = 101;
  $("#sleepBar").attr("style", "width: " + sleepBar + "%; transition: 5s ease-in-out;");
  if (level === 1) {
    $(".imagePilihan").attr("src", "Asset/img/Character/Bayi_" + pilihanUser + "_Tidur" + ".svg");
  } else if (level === 2) {
    $(".imagePilihan").attr("src", "Asset/img/Character/Anak_" + pilihanUser + "_Tidur" + ".svg");
    console.log("Hello World");
  } else {
    $(".imagePilihan").attr("src", "Asset/img/Character/Dewasa_" + pilihanUser + "_Tidur" + ".svg");
  }
  $("#btnSleep").addClass("disabled");
  let cepetTidur = setInterval(clock, 10);
  setTimeout(function () {
    if (level === 1) {
      $(".imagePilihan").attr("src", "Asset/img/Character/Bayi_" + pilihanUser + ".svg");
    } else if (level === 2) {
      $(".imagePilihan").attr("src", "Asset/img/Character/Anak_" + pilihanUser + ".svg");
      console.log("Hello World");
    } else {
      $(".imagePilihan").attr("src", "Asset/img/Character/Dewasa_" + pilihanUser + ".svg");
    }
    clearInterval(cepetTidur);
    let backTidur = setInterval(clock, 100);
    clearInterval(backTidur);
    $("#btnSleep").removeClass("disabled");
  }, 5000);
});

function penguranganSleepBar() {
  if (level === 1) {
    sleepBar = sleepBar - 1;
  } else if (level === 2) {
    sleepBar = sleepBar - 2;
  } else {
    sleepBar = sleepBar - 3;
  }
  $("#sleepBar").attr("style", "width: " + sleepBar + "%");
  if (sleepBar <= 0) {
    $("#sleepBar").attr("style", "width: " + 0 + "%");
  }
}

function penguranganGameBar() {
  gameBar = gameBar - 1;
  $("#gameBar").attr("style", "width: " + gameBar + "%");
  if (gameBar <= 0) {
    clearInterval(gameBarIntv);
  }
}

$(".btnHeal").click(function () {
  healthBar = healthBar + 20;
  $("#healthBar").attr("style", "width: " + healthBar + "%; transition: 1s ease-in-out;");
  if (level === 1) {
    $(".imagePilihan").attr("src", "Asset/img/Character/Bayi_" + pilihanUser + "_Heal" + ".svg");
  } else if (level === 2) {
    $(".imagePilihan").attr("src", "Asset/img/Character/Anak_" + pilihanUser + "_Heal" + ".svg");
    console.log("Hello World");
  } else {
    $(".imagePilihan").attr("src", "Asset/img/Character/Dewasa_" + pilihanUser + "_Heal" + ".svg");
  }
  $("#btnHeal").addClass("disabled");
  let cepetHealth = setInterval(clock, 10);
  setTimeout(function () {
    if (level === 1) {
      $(".imagePilihan").attr("src", "Asset/img/Character/Bayi_" + pilihanUser + ".svg");
    } else if (level === 2) {
      $(".imagePilihan").attr("src", "Asset/img/Character/Anak_" + pilihanUser + ".svg");
      console.log("Hello World");
    } else {
      $(".imagePilihan").attr("src", "Asset/img/Character/Dewasa_" + pilihanUser + ".svg");
    }
    clearInterval(cepetHealth);
    let backHealth = setInterval(clock, 100);
    clearInterval(backHealth);
    $("#btnHeal").removeClass("disabled");
  }, 1000);
});

function penguranganHealthBar() {
  if (sleepBar <= 0) {
    healthBar = healthBar - 5;
    $("#healthBar").attr("style", "width: " + healthBar + "%");
  }
  if (eatBar <= 0) {
    healthBar = healthBar - 2;
    $("#healthBar").attr("style", "width: " + healthBar + "%");
  }
  if (gameBar <= 0) {
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
