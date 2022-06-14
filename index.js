const containerImg = document.querySelector(".container-coffeimg");
const images = containerImg.querySelectorAll("img"); //TODAS LAS IMAGENES DE NUESTRO CONTENEDOR
const starCoffe = document.querySelectorAll(".star-coffee"); //CONTENEDOR DE NUESTRO NUMERO Y EL ICONO
const buttonMenu = document.querySelector(".fa-bars");
const body = document.querySelector("body");
const numbers = document.querySelector(".numbers");
const navbarCoffee = document.querySelector("#navbar-coffee");
const menuButton = document.getElementsByClassName("fa-bars");
const slideMenu = document.querySelector(".slide-menu");

console.log(starCoffe);
console.log(images);

buttonMenu.addEventListener("click", () => {
  slideMenu.classList.toggle("remove");
});

//ITERAMOS SOBRE TODOS LOS CONTENEDORES DE NUESTROS NUMEROS E ITERAMOS SOBRE ELLOS PARA PODER HACER UN EVENTO PARA CADA UNO

starCoffe.forEach((item, idx) => {
  item.addEventListener("click", () => {
    console.log(item, idx);

    // if (item !== idx) {
    //   item.classList.toggle("favorite-coffe");
    // }

    // numbers.classList.toggle("favorite-coffe");
    hideAllContents();

    // hideAllItems();

    images[idx].classList.add("show");
  });
});

function hideAllContents() {
  images.forEach((image) => {
    image.classList.remove("show");
  });
}

// numbers.forEach((number) => {
//   console.log(number);
//   number.addEventListener("click", () => {
//     number.classList.add("favorite-coffe");
//     console.log(number);
//   });
// });

//HACER CAMBIO DE COLOR CUANDO SELECCIONAMOS EL CAFÉ
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers);
  numbers[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0] = current[0].className.replace("active");
    // this.className += "active";
  });
}

//HACER QUE CUANDO SE DE CLICK AL BOTON DEL MENU SE CANCELE EL SCROLL
buttonMenu.addEventListener(
  "click",
  (remove = () => {
    body.classList.toggle("no-scroll");
    body.classList.toggle("opacity");
  })
);
