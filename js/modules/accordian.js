/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
document.addEventListener('DOMContentLoaded', function() {
    
    // Select all accordion toggle elements
    var accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(function(accordionToggle) {
        accordionToggle.addEventListener('click', function() {
            // Toggle the 'aria-expanded' attribute for the clicked item
            var isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);

            // Get the icon within the clicked toggle
            var icon = this.querySelector('.zenicon-keyboard-arrow-right, .zenicon-keyboard-arrow-down');

            // Correctly toggle the icon classes
            if (icon) {
                if (isExpanded) {
                    // If the item is currently open and is being closed, show the 'right' arrow
                    icon.classList.remove('zenicon-keyboard-arrow-down');
                    icon.classList.add('zenicon-keyboard-arrow-right');
                } else {
                    // If the item is currently closed and is being opened, show the 'down' arrow
                    icon.classList.remove('zenicon-keyboard-arrow-right');
                    icon.classList.add('zenicon-keyboard-arrow-down');
                }
            }

            // Reset other toggles to default state
            accordionToggles.forEach(function(otherToggle) {
                if (otherToggle !== accordionToggle) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    var otherIcon = otherToggle.querySelector('.zenicon-keyboard-arrow-down, .zenicon-keyboard-arrow-right');
                    if (otherIcon) {
                        otherIcon.classList.remove('zenicon-keyboard-arrow-down');
                        otherIcon.classList.add('zenicon-keyboard-arrow-right');
                    }
                }
            });
        });
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//   const accordion = document.querySelector('.accordion');

//   if (accordion) {
//     const toggles = accordion.querySelectorAll('.toggle');

//     toggles.forEach(toggle => {
//       toggle.addEventListener('change', () => {
//         // Define the expanded content area
//         const contentArea = document.getElementById(toggle.id).nextElementSibling.nextElementSibling;

//         if (toggle.checked) {
//           // When the toggle is checked, set overflow to hidden to prevent scrollbar
//           contentArea.style.overflow = 'hidden';

//           // Set a timeout that matches your CSS transition time
//           setTimeout(() => {
//             // After the transition, set overflow to auto if content is taller than the container
//             contentArea.style.overflow = 'auto';
//           }, 500); // Adjust the time to match your CSS transition-duration
//         } else {
//           // When the toggle is not checked, immediately set overflow to hidden
//           contentArea.style.overflow = 'hidden';
//         }

//         toggles.forEach(t => {
//           if (t !== toggle) {
//             t.checked = false;
//             // Reset the overflow for other content areas that are not active
//             t.nextElementSibling.nextElementSibling.style.overflow = 'hidden';
//           }
//         });
//       });
//     });
//   }
// });


