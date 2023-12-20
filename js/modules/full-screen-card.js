/*
 * zenCSS Beta v2.0.0 (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

// ----------------------------------------
// Card/Full bleed
// ----------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        var image = card.querySelector(".img-full");
        if (image) {
            image.addEventListener("load", function () {
                var imageHeight = image.offsetHeight + 20;
                card.style.paddingTop = imageHeight + "px";
            });

            // If the image is already loaded (cached images), manually trigger the load event
            if (image.complete) {
                image.dispatchEvent(new Event("load"));
            }
        }
    });
});
