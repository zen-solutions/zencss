/*
  * zenCSS v1.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 
// ----------------------------------------
// Accordian - autoclose when choosing a new option
// ----------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.querySelector('.accordion');

  if (accordion) {
    const toggles = accordion.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
      toggle.addEventListener('change', () => {
        // Define the expanded content area
        const contentArea = document.getElementById(toggle.id).nextElementSibling.nextElementSibling;

        if (toggle.checked) {
          // When the toggle is checked, set overflow to hidden to prevent scrollbar
          contentArea.style.overflow = 'hidden';

          // Set a timeout that matches your CSS transition time
          setTimeout(() => {
            // After the transition, set overflow to auto if content is taller than the container
            contentArea.style.overflow = 'auto';
          }, 500); // Adjust the time to match your CSS transition-duration
        } else {
          // When the toggle is not checked, immediately set overflow to hidden
          contentArea.style.overflow = 'hidden';
        }

        toggles.forEach(t => {
          if (t !== toggle) {
            t.checked = false;
            // Reset the overflow for other content areas that are not active
            t.nextElementSibling.nextElementSibling.style.overflow = 'hidden';
          }
        });
      });
    });
  }
});


