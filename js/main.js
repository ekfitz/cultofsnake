window.addEventListener("resize", setMobile);
var menu = document.getElementById("topMenu");
var navIcon = document.getElementById("navIcon");
var obox1 = document.getElementById("obox1");
var obox2 = document.getElementById("obox2");
var obox3 = document.getElementById("obox3");
var obox4 = document.getElementById("obox4");
var backLogo = document.getElementById("backLogo");
backLogo.src = "images/cultofsnake.png";
var menutext1 = document.getElementById("menutext1");
var menutext2 = document.getElementById("menutext2");
var menutext3 = document.getElementById("menutext3");
var menutext4 = document.getElementById("menutext4");
var mcir1 = document.getElementById("mcir1");
var mcir2 = document.getElementById("mcir2");
var mcir3 = document.getElementById("mcir3");

menu.status = "off";

menutext1.innerHTML = "Contact";
menutext2.innerHTML = "About";
menutext3.innerHTML = "Products";
menutext4.innerHTML = "News";

navIcon.onmouseover = highDots;
navIcon.onmouseout = regDots;
navIcon.onclick = showMenu;

function highDots() {
  mcir1.style.opacity = "1";
  mcir2.style.opacity = "1";
  mcir3.style.opacity = "1";
}

function regDots() {
  mcir1.style.opacity = "0.7";
  mcir2.style.opacity = "0.7";
  mcir3.style.opacity = "0.7";
}

function showMenu() {
  if (menu.status == "off") {
    obox1.style.display = "block";
    obox2.style.display = "block";
    obox3.style.display = "block";
    obox4.style.display = "block";
    menu.status = "on";
  } else {
    obox1.style.display = "none";
    obox2.style.display = "none";
    obox3.style.display = "none";
    obox4.style.display = "none";
    menu.status = "off";
  }
}
function setMobile() {
  var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

  if (w > 800) {
  // set desktop

    backLogo.className = "backlogoD";

    navIcon.style.width = "6.5%";
    navIcon.style.height = "40%";
    navIcon.style.right = "2.5%";

    obox1.className = "menuoptionD";
    obox1.style.right = "10%";

    obox2.className = "menuoptionD";
    obox2.style.right = "21%";

    obox3.className = "menuoptionD";
    obox3.style.right = "32%";

    obox4.className = "menuoptionD";
    obox4.style.right = "43%";

  } else {
  // set mobile
    backLogo.className = "backlogoM";

    navIcon.className = "menuoptionM";
    navIcon.style.width = "7.5%";
    navIcon.style.height = "40%";
    navIcon.style.right = "2.5%";

    obox1.className = "menuoptionM";
    obox1.style.right = "10%";

    obox2.className = "menuoptionM";
    obox2.style.right = "33%";

    obox3.className = "menuoptionM";
    obox3.style.right = "55%";

    obox4.className = "menuoptionM";
    obox4.style.right = "77%";

  }
}
