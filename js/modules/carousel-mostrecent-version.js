/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2024 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */

// ----------------------------------------
// Image Slider/Carousel
// ---------------------------------------

window.onload = function() {
  let isAnimating = false;
  let index1 = 0;
  let slideWidth;
  let autoRotateInterval;

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

      // Function to start auto-rotation
      function startAutoRotate() {
          autoRotateInterval = setInterval(() => {
              if (index1 < totalSlides - 1) {
                  index1++;
              } else {
                  index1 = 0;
              }
              slidesContainer.style.transition = 'transform 0.5s ease-out';
              moveToSlide(index1);
          }, 4000); // Rotate every 4 seconds
      }

      // Stop auto-rotation
      function stopAutoRotate() {
          clearInterval(autoRotateInterval);
      }

      // Initialize auto-rotation
      startAutoRotate();

      // Event listeners to pause and resume auto-rotation
      slider.addEventListener('mouseenter', stopAutoRotate);
      slider.addEventListener('mouseleave', startAutoRotate);

      // Event listener for when a transition ends on the slides container
      slidesContainer.addEventListener('transitionend', () => {
          if (index1 === totalSlides - 1) {
              slidesContainer.style.transition = 'none';
              index1 = 0;
              moveToSlide(index1);
          } else if (index1 === 0 && isAnimating) {
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
          if (event.target.classList.contains('next') && !isAnimating) {
              isAnimating = true;
              if (index1 < totalSlides - 1) {
                  index1++;
              } else {
                  index1 = 0;
              }
              slidesContainer.style.transition = 'transform 0.5s ease-out';
              moveToSlide(index1);
              setTimeout(() => {
                  isAnimating = false;
              }, 500);
          }

          if (event.target.classList.contains('prev') && !isAnimating) {
              isAnimating = true;
              if (index1 === 0) {
                  slidesContainer.style.transition = 'none';
                  index1 = totalSlides - 1;
                  moveToSlide(index1);
                  requestAnimationFrame(() => {
                      slidesContainer.style.transition = 'transform 0.5s ease-out';
                      index1 = totalSlides - 2;
                      moveToSlide(index1);
                  });
              } else {
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
};
