/*
 * zenCSS v2.3.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener("DOMContentLoaded", function () {
    var accordionToggles = document.querySelectorAll(".accordion-toggle");

    accordionToggles.forEach(function (accordionToggle) {
        accordionToggle.addEventListener("click", function () {
            // Determine if the clicked toggle is being expanded
            var isExpanding = this.getAttribute("aria-expanded") === "false";

            // Remove active class from all toggles and reset icons
            accordionToggles.forEach(function (otherToggle) {
                otherToggle.classList.remove("active-toggle");
                otherToggle.setAttribute("aria-expanded", "false");

                var otherIcon = otherToggle.querySelector(".zenicon-keyboard-arrow-right, .zenicon-keyboard-arrow-down");
                if (otherIcon) {
                    otherIcon.classList.remove("zenicon-keyboard-arrow-down");
                    otherIcon.classList.add("zenicon-keyboard-arrow-right");
                }

                var otherPanel = otherToggle.nextElementSibling;
                otherPanel.style.overflow = "hidden"; // Set overflow to hidden during transition
                otherPanel.style.maxHeight = null;
                otherPanel.setAttribute("aria-hidden", "true"); // Hide other panels
            });

            // Set the clicked toggle as active if it's expanding
            if (isExpanding) {
                this.classList.add("active-toggle");
                this.setAttribute("aria-expanded", "true");

                var icon = this.querySelector(".zenicon-keyboard-arrow-right, .zenicon-keyboard-arrow-down");
                if (icon) {
                    icon.classList.remove("zenicon-keyboard-arrow-right");
                    icon.classList.add("zenicon-keyboard-arrow-down");
                }

                var panel = this.nextElementSibling;
                panel.style.maxHeight = panel.scrollHeight > 200 ? "1000px" : panel.scrollHeight + 10 + "px";
                panel.setAttribute("aria-hidden", "false"); // Show the current panel

                // Wait for the transition to end before setting overflow to auto
                setTimeout(function() {
                    panel.style.overflow = "auto";
                }, 300); // transition duration
            }
        });
    });
});
