/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2024 Shaun Mackey
  * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
  */
 
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.lazy-load');

    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.setAttribute('aria-busy', 'true'); // Indicate loading
                    const newSrc = image.getAttribute('data-src');

                    // Create a new Image to load in the background
                    const img = new Image();
                    img.onload = function() {
                        image.src = newSrc; // Set src when fully loaded
                        image.removeAttribute('aria-busy'); // Remove loading indication
                    };
                    img.src = newSrc;

                    image.classList.remove('lazy-load');
                    observer.unobserve(image);
                }
            });
        });

        images.forEach(image => {
            imageObserver.observe(image);
        });
    }
});
