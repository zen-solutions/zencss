/*
 * zenCSS v2.3.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

document.addEventListener("DOMContentLoaded", (event) => {
    const banner = document.querySelector(".cookie-consent-banner");

    // Check if the banner element exists
    if (banner) {
        const acceptBtn = document.querySelector(".accept-cookies");
        banner.style.zIndex = "1100";

        // Check if cookies are already accepted
        if (!localStorage.getItem("cookies-accepted")) {
            banner.style.display = "block"; // Show banner if cookies not accepted
        }

        // Event listener for accept button
        if (acceptBtn) {
            acceptBtn.addEventListener("click", () => {
                localStorage.setItem("cookies-accepted", "true"); // Set flag in local storage
                banner.style.display = "none"; // Hide banner
            });
        }
    }
});
