/*
 * zenCSS v2.0.2-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(
        document.querySelectorAll(".zen img.lazy-load"),
    );

    if (lazyImages.length === 0) {
        //console.log('No lazy-load images found.');
        return;
    }

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (
            entries,
            observer,
        ) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    // Set onload before changing the src
                    lazyImage.onload = function () {
                        this.classList.remove("lazy-load");
                        //console.log('Lazy-load class removed:', this);
                    };
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        lazyImages.forEach(function (lazyImage) {
            lazyImage.onload = function () {
                this.classList.remove("lazy-load");
                //console.log('Lazy-load class removed:', this);
            };
            lazyImage.src = lazyImage.dataset.src;
        });
    }
});

//old depricated - leaving for now to reference to what was done for image gallery

// document.addEventListener("DOMContentLoaded", function () {
//     const images = document.querySelectorAll(".lazy-load");

//     if (images.length > 0) {
//         const imageObserver = new IntersectionObserver((entries, observer) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     const image = entry.target;
//                     image.setAttribute("aria-busy", "true"); // Indicate loading
//                     const newSrc = image.getAttribute("data-src");

//                     // Create a new Image to load in the background
//                     const img = new Image();
//                     img.onload = function () {
//                         image.src = newSrc; // Set src when fully loaded
//                         image.removeAttribute("aria-busy"); // Remove loading indication
//                     };
//                     img.src = newSrc;

//                     image.classList.remove("lazy-load");
//                     observer.unobserve(image);
//                 }
//             });
//         });

//         images.forEach((image) => {
//             imageObserver.observe(image);
//         });
//     }
// });
