/*
 * zenCSS v2.3.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener('DOMContentLoaded', function() {
    const fadeDivs = document.querySelectorAll('.fade > div');

    // Only proceed if there are elements matching the selector
    if (fadeDivs.length > 0) {
        let currentIndex = 0;

        setInterval(() => {
            // Determine the next index
            const nextIndex = (currentIndex + 1) % fadeDivs.length;

            // Check if the next div exists
            if (fadeDivs[nextIndex]) {
                fadeDivs[nextIndex].style.opacity = 1;
            }

            // Check if the current div exists
            if (fadeDivs[currentIndex]) {
                fadeDivs[currentIndex].style.opacity = 0;
            }

            // Update the current index
            currentIndex = nextIndex;
        }, 4000); // Interval for each transition
    }
});

