document.body.onload = setMobile;
window.addEventListener("resize", setMobile);

var menu = document.getElementById("menu");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var logopic = document.getElementById("logopic");

nav1.style.top = "-5%";
nav2.style.top = "-5%";
nav3.style.top = "-5%";

nav1.innerHTML = "Load Boxes";
nav2.innerHTML = "Gear Mods";
nav3.innerHTML = "Custom";
logopic.src = "images/cultofsnake.png";
menu.onclick = showMenu;

function showMenu() {
  if (nav1.style.top == "-5%") {
    nav1.style.top = "2.5%";
    nav2.style.top = "2.5%";
    nav3.style.top = "2.5%";
    menu.style.transform = "rotate(-90deg)";
  } else {
    nav1.style.top = "-5%";
    nav2.style.top = "-5%";
    nav3.style.top = "-5%";
    menu.style.transform = "rotate(0deg)";
  }
}

function setMobile() {
  var w = window.innerWidth;

  if (w < 1000) {
    window.location.replace("m.html");
  }
}
