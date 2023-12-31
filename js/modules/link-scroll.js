/*
 * zenCSS Beta v2.0.0 (https://zencss.com/)
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
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    }
});
