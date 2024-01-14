/*
 * zenCSS v2.3.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const slidesContainer = slider.querySelector(".slides-container");
        const originalSlides = Array.from(slidesContainer.children);
        const totalOriginalSlides = originalSlides.length;
        const nextButton = slider.querySelector(".next");
        const prevButton = slider.querySelector(".prev");
        const shouldAutoRotate = slider.getAttribute("data-auto-rotate") === "true";

        // Clone the first and last slides to create an infinite loop effect
        const firstSlideClone = originalSlides[0].cloneNode(true);
        const lastSlideClone = originalSlides[totalOriginalSlides - 1].cloneNode(true);
        slidesContainer.insertBefore(lastSlideClone, originalSlides[0]);
        slidesContainer.appendChild(firstSlideClone);

        let currentIndex = 1; // Start from the first original slide (not the clone)
        let isTransitioning = false;
        let autoRotate;

        // Function to start auto-rotating
        function startAutoRotate() {
            if (shouldAutoRotate) {
                autoRotate = setInterval(moveToNext, 5000);
            }
        }

        // Function to stop auto-rotating
        function stopAutoRotate() {
            clearInterval(autoRotate);
        }

        // Initialize position to the first original slide
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Re-enable transitions after initial positioning
        setTimeout(() => {
            slidesContainer.style.transition = "transform 0.5s ease";
        }, 0);

        function updateSlidePosition() {
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function moveToNext() {
            if (isTransitioning) return;
            currentIndex++;
            isTransitioning = true;
            updateSlidePosition();
        }

        function moveToPrev() {
            if (isTransitioning) return;
            currentIndex--;
            isTransitioning = true;
            updateSlidePosition();
        }

        slidesContainer.addEventListener("transitionend", () => {
            if (currentIndex >= totalOriginalSlides + 1) {
                slidesContainer.style.transition = "none";
                currentIndex = 1;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
                setTimeout(() => {
                    slidesContainer.style.transition = "transform 0.5s ease";
                }, 0);
            } else if (currentIndex === 0) {
                slidesContainer.style.transition = "none";
                currentIndex = totalOriginalSlides;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
                setTimeout(() => {
                    slidesContainer.style.transition = "transform 0.5s ease";
                }, 0);
            }
            isTransitioning = false;
        });

        nextButton.addEventListener("click", moveToNext);
        prevButton.addEventListener("click", moveToPrev);

        // Event listeners to stop/start auto-rotating
        slidesContainer.addEventListener("mouseenter", stopAutoRotate);
        slidesContainer.addEventListener("mouseleave", startAutoRotate);
        nextButton.addEventListener("mouseenter", stopAutoRotate);
        nextButton.addEventListener("mouseleave", startAutoRotate);
        prevButton.addEventListener("mouseenter", stopAutoRotate);
        prevButton.addEventListener("mouseleave", startAutoRotate);

        // Start auto-rotating for this slider
        startAutoRotate();
    });
});
