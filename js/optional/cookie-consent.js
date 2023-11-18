/*
  * zenCSS v1.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */

document.addEventListener('DOMContentLoaded', (event) => {
    const banner = document.querySelector('.cookie-consent-banner');
    const acceptBtn = document.querySelector('.accept-cookies');
    banner.style.zIndex = '1100';

    // Check if cookies are already accepted
    if (!localStorage.getItem('cookies-accepted')) {
        banner.style.display = 'block';  // Show banner if cookies not accepted
    }

    // Event listener for accept button
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');  // Set flag in local storage
        banner.style.display = 'none';  // Hide banner
    });
});




