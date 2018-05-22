$(document).ready(function() {
  $("#owl-carousel").owlCarousel({
    items: 3,
    margin:30,
    loop: true,
    center: true,
    nav: true,
    navText: ["", ""],
    dots: false,
  });
});

var item = document.querySelector(".item");
var modal = document.querySelector(".description");
var menu = document.querySelector(".menu");
var navigation = document.querySelector(".site-navigation");
var hotline = document.querySelector(".hotline");
var social = document.querySelector(".head-social");
var search = document.querySelector(".open-search");
var form = document.querySelector(".search");

item.addEventListener("mouseover", function(evt) {
  evt.preventDefault();
  modal.classList.add("appear");
});

item.addEventListener("mouseout", function(evt) {
  evt.preventDefault();
  modal.classList.remove("appear");
});

menu.addEventListener("click", function(evt) {
  evt.preventDefault();
  navigation.classList.toggle("disappear");
  hotline.classList.toggle("appear");
  social.classList.toggle("disappear");
});

search.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("disappear");
});
