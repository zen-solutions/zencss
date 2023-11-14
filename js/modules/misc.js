/*
  * zenCSS v1.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 

  //-------------------------------------
  // Dynamic year in footer
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      const currentYear = new Date().getFullYear();
      yearSpan.textContent = currentYear;
    }
  });
  
  //-------------------------------------
  // Heart toggle
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    var heartToggle = document.querySelector('.heart-toggle');
    
    if (heartToggle) {
        heartToggle.addEventListener('click', function () {
            var emptyHeart = this.querySelector('.heart-empty');
            var filledHeart = this.querySelector('.heart-filled');

            if (emptyHeart && filledHeart) {
                emptyHeart.classList.toggle('show');
                filledHeart.classList.toggle('show');
            }
        });
    }
});

// New stuff here after modules were created. If we need to revert, include this stuff. 
document.querySelectorAll('.accordion-toggle').forEach(item => {
  item.addEventListener('click', event => {
      event.preventDefault();

      const contentId = item.getAttribute('aria-controls');
      const content = document.getElementById(contentId);

      // Close other expanded contents
      document.querySelectorAll('.expanded-content').forEach(el => {
          if (el.id !== contentId) {
              el.classList.remove('show');
              el.style.overflowY = 'hidden';
          }
      });

      // Toggle current content
      content.classList.toggle('show');

      setTimeout(() => {
          if (content.scrollHeight > content.clientHeight) {
              content.style.overflowY = 'auto';
          } else {
              content.style.overflowY = 'hidden';
          }
      }, 500); // Match this with your CSS transition duration
  });
});
