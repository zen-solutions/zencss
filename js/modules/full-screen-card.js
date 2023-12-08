/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2024 Shaun Mackey
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
          image.addEventListener('load', function() {
              var imageHeight = image.offsetHeight + 20;
              card.style.paddingTop = imageHeight + "px";
          });
          
          // If the image is already loaded (cached images), manually trigger the load event
          if (image.complete) {
              image.dispatchEvent(new Event('load'));
          }
      }
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   var cards = document.querySelectorAll(".card");

//   cards.forEach(function (card) {
//       var image = card.querySelector(".img-full");
//       if (image) {
//           var imageHeight = image.offsetHeight + 13;
//           card.style.paddingTop = imageHeight + "px" ;
//       }
//   });
// });

 
