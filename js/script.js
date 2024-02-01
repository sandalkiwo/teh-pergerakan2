// toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = (E) => {
  navbarNav.classList.toggle("active");
  E.preventDefault();
};

// toogle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box')


document.querySelector('#search-button').onclick = (E) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  E.preventDefault();
};

// togle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (E) => {
  shoppingCart.classList.toggle('active');
  E.preventDefault();
}



// klik diluar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }

});
