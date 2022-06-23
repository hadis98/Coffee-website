/*=========== LOADER ===========*/
/*=========== SHOW MENU ===========*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*=========== MENU SHOW ===========*/
/*Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=========== MENU HIDDEN ===========*/
/*Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=========== REMOVE MENU MOBILE ===========*/
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLinks.forEach((link) => link.addEventListener("click", linkAction));
/*=========== CHANGE BACKGROUND HEADER ===========*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", scrollHeader);
/*=========== MIXITUP FILTER PRODUCTS ===========*/
let config = {
  animation: {
    duration: 300,
  },
  selectors: {
    target: ".products__card",
  },
};

let mixer = mixitup(".products__content", config);
/*Default filter products*/
mixer.filter(".delicious");
/*Link active products*/
const linkProducts = document.querySelectorAll(".products__item");

function activeProducts() {
  // console.log(this); //with function keyword =>this === <li><li/>
  //with arrow function => this === window object
  linkProducts.forEach((link) => link.classList.remove("active-product"));
  this.classList.add("active-product");
}

linkProducts.forEach((linkProduct) =>
  linkProduct.addEventListener("click", activeProducts)
);

/*=========== SHOW SCROLL UP ===========*/
/*=========== SCROLL SECTIONS ACTIVE LINK ===========*/
