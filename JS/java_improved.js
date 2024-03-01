"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var gallery = document.getElementById("gallery");
  var loadingScreen = document.getElementById("loadingScreen");

  // Asegurar que la galería está oculta inicialmente
  
  video.addEventListener("canplaythrough", function () {
    gallery.style.display = 'block';
  });

  video.addEventListener("canplaythrough", function () {
    // Ocultar la pantalla de carga y mostrar el video
    loadingScreen.style.display = "none";
    video.style.display = "block";
    video.play();

    // Usar setTimeout para retrasar la carga de la galería
    setTimeout(function () {
      gallery.style.display = "block"; // Asumiendo que tu galería está oculta inicialmente
    }, 500000); // Retraso de 5 segundos
  });

  video.load();
});

const imglist = document.querySelectorAll(`.img`);
const lightbox = document.querySelector(`.lightbox`);
const grande = document.querySelector(`.grande`);
const closeBtn = document.querySelector(`.close`);

imglist.forEach((eachImg, index) => {
  imglist[index].addEventListener(`click`, () => {
    lightbox.classList.add(`isActive`);
    grande.src = imglist[index].src;
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myvideo");
  var loadingScreen = document.getElementById("loadingScreen");

  setTimeout(function () {
    loadingScreen.style.display = "none";
    video.style.display = "block";
    video.play();
  }, 2000); // 5 segundos
  video.load();
});

const menu = document.querySelector(".ulmenu");
const openMenuBtn = document.querySelector(".open-menu");
//const closeMenuBtn = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".aLink");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
  if (!menu.classList.contains("menu_opened")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
}

openMenuBtn.addEventListener("click", toggleMenu);
//closeMenuBtn.addEventListener("click", toggleMenu);
//menuLinks.addEventListener("click", toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    if (menu.classList.contains("menu_opened")) {
      menu.classList.remove("menu_opened");
    }
  });
});
 
  const header = document.querySelector(`.header`); // Selecciona el header

  imglist.forEach((eachImg, index) => {
    imglist[index].addEventListener(`click`, () => {
      lightbox.classList.add(`isActive`);
      grande.src = imglist[index].src;
      header.style.visibility = 'hidden'; // Oculta el header
    });
  });

  closeBtn.addEventListener(`click`, () => {
    lightbox.classList.remove(`isActive`);
    header.style.visibility = 'visible'; // Muestra el header
  });
  

