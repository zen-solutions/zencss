/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 
//--------------------------------------------------------
//Background image
//--------------------------------------------------------

window.addEventListener("DOMContentLoaded", function () {
  var imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach(function (container) {
      var img = container.querySelector("img");
      var imgUrl = img.src;
      container.style.backgroundImage = "url(" + imgUrl + ")";
      container.style.backgroundSize = "cover";
      container.style.backgroundPosition = "center center";
      img.style.display = "none";
  });
});
