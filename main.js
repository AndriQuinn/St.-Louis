console.log('Mock Landing Page');
console.log("By. Andrie Quinatac-an ");

var counter = 1;
var Menu = document.getElementById("menu");
var menuImg = document.getElementById("menuimg");

function toggleMenu() {
  counter += 1;
  
  if (counter % 2 == 0) {
    Menu.style.width = "60%";
    menuImg.src = "cancel.webp";
  } else {
    Menu.style.width = "0%";
    menuImg.src = "menu.webp";
  }
}
