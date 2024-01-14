/*
 * zenCSS v2.2.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener('DOMContentLoaded', function() {
    const fadeDivs = document.querySelectorAll('.fade > div');
    let currentIndex = 0;

    setInterval(() => {
        // Determine the next index
        const nextIndex = (currentIndex + 1) % fadeDivs.length;

        // Fade in the next div
        fadeDivs[nextIndex].style.opacity = 1;

        // Fade out the current div
        fadeDivs[currentIndex].style.opacity = 0;

        // Update the current index
        currentIndex = nextIndex;
    }, 4000); // Interval for each transition
});
