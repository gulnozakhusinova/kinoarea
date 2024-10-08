let searchBtn = document.querySelector(".search")

function filterYear() {
  let btn = event.target
  let year = btn.innerHTML
  let slides = document.querySelectorAll(".filmContainer2 .swiper-slide")

  slides.forEach((slide) => {
    if (year == "Все") {
      slide.style.display = "block"
    } else {
      let slideYear = slide.getAttribute("data-year")
      if (slideYear == year) {
        slide.style.display = "block"
      } else {
        slide.style.display = "none"
      }
    }
  })
}


let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

let registerBtn = document.getElementById('register');
let loginBtn = document.getElementById('login');
let closeLoginBtn = document.querySelector('.enterContainer .close');
let closeRegisterBtn = document.querySelector('.registrationContainer .close');

loginBtn.addEventListener('click', function () {
  let modal = document.querySelector('.enterContainer')
  modal.classList.toggle("open");
});

closeLoginBtn.addEventListener('click', function () {
  let modal = document.querySelector('.enterContainer')
  modal.classList.toggle("open");
});

registerBtn.addEventListener('click', function () {
  let modal = document.querySelector('.registrationContainer')
  modal.classList.toggle("open");
});
closeRegisterBtn.addEventListener('click', function () {
  let modal = document.querySelector('.registrationContainer')
  modal.classList.toggle("open");
});