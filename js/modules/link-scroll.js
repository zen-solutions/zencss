/*
 * zenCSS v2.2.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    if (anchors.length > 0) {
        anchors.forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                const hrefAttribute = this.getAttribute("href");

                // Skip processing if href is only '#'
                if (hrefAttribute === "#") {
                    return;
                }

                e.preventDefault();
                const targetElement = document.querySelector(hrefAttribute);

                if (targetElement) {
                    // Get the target element's top position relative to the document
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                    // Scroll to the position minus 100 pixels
                    window.scrollTo({
                        top: targetPosition - 100,
                        behavior: "smooth"
                    });
                }
            });
        });
    }
});
