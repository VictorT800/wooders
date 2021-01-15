const menu = document.querySelector(".menu");
console.log(menu);

const boton = document.querySelector(".boton");
console.log(boton);
boton.addEventListener("click", () => {
  //menu.style.display = 'block';
  menu.classList.toggle("menu");
});

// Efecto parallax
const imagen = document.querySelector(".parallax");
//console.log (imagen);
window.onscroll = function () {
  imagen.style.top = -(window.pageYOffset / 2) + "px";
};

/*
const titulo = document.querySelector("h1");
console.log(titulo);

var alto = screen.height;
//var anchoInterior = window.innerWidth;
console.log(alto);

let nuevoPaddig = alto / 2 - 150;
console.log(nuevoPaddig);

titulo.style.paddingTop = nuevoPaddig + "px";
*/
