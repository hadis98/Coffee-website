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
/*=========== MIXITUP FILTER PRODUCTS ===========*/

/*Link active products*/


/*=========== SHOW SCROLL UP ===========*/
/*=========== SCROLL SECTIONS ACTIVE LINK ===========*/
