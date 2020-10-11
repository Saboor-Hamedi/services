"use strict";

var menu = document.querySelector('#menu');
var items = document.querySelector('.items');
menu.addEventListener('click', function () {
  if (!items.style.display == "block" || items.style.height === "0px") {
    items.style.height = '300px';
  } else {
    items.style.height = "0px";
  }
}); // hover

$(document).on('mq4hsChange', function () {
  $(document.documentElement).toggleClass('my-true-hover', e.trueHover);
});