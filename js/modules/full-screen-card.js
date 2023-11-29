/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */

// ----------------------------------------
// Hack for card with full screen image ;)
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
      var image = card.querySelector(".img-full");
      if (image) {
          var imageHeight = image.offsetHeight + 13;
          card.style.paddingTop = imageHeight + "px" ;
      }
  });
});

 
