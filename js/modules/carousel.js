/*
  * zenCSS v1.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 
// ----------------------------------------
// Image Slider/Carousel
// // ---------------------------------------

let isAnimating = false;
let index1 = 0;
let slideWidth;

// Cache DOM elements
const slider = document.querySelector('.slider');
const slidesContainer = slider ? document.querySelector('.slides-container') : null;
const slides = slidesContainer ? Array.from(slidesContainer.children) : [];
const totalSlides = slides.length; // The actual total is minus one because the last is a duplicate

// Only proceed if there are slides
if (slides.length > 0) {
  slideWidth = slides[0].clientWidth; // Width of a single slide

  // Function to move to a specific slide
  function moveToSlide(slideIndex) {
    slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }

  // Event listener for when a transition ends on the slides container
  slidesContainer.addEventListener('transitionend', () => {
    // If we're at the duplicate of the first slide, reset to the true first slide
    if (index1 === totalSlides - 1) {
      slidesContainer.style.transition = 'none';
      index1 = 0;
      moveToSlide(index1);
    }
    // If we've moved to the first slide and we are animating backwards, jump to the last slide
    else if (index1 === 0 && isAnimating) {
      slidesContainer.style.transition = 'none';
      index1 = totalSlides - 2;
      moveToSlide(index1);
    }
  });

  // Update slide width on window resize
  window.addEventListener('resize', () => {
    slideWidth = slides[0].clientWidth;
    slidesContainer.style.transition = 'none';
    moveToSlide(index1);
  });

  // Click event delegation on the parent element
  slider.addEventListener('click', (event) => {
    // Next button logic
    if (event.target.classList.contains('next') && !isAnimating) {
      isAnimating = true;

      // Move to the next slide
      if (index1 < totalSlides - 1) {
        index1++;
      } else {
        // If at the end, wrap around to the first slide
        index1 = 0;
      }

      // Animate to the next slide
      slidesContainer.style.transition = 'transform 0.5s ease-out';
      moveToSlide(index1);

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }

    // Prev button logic
    if (event.target.classList.contains('prev') && !isAnimating) {
      isAnimating = true;

      // If at the first slide, wrap to the 'fake' last slide (duplicate of the first)
      if (index1 === 0) {
        slidesContainer.style.transition = 'none';
        index1 = totalSlides - 1;
        moveToSlide(index1);

        // Allow a frame re-draw to apply the 'none' transition, then apply the transition
        requestAnimationFrame(() => {
          slidesContainer.style.transition = 'transform 0.5s ease-out';
          index1 = totalSlides - 2;
          moveToSlide(index1);
        });
      } else {
        // Move to the previous slide
        index1--;
        slidesContainer.style.transition = 'transform 0.5s ease-out';
        moveToSlide(index1);
      }

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }
  });
}

