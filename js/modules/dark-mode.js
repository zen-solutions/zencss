/*
 * zenCSS v2.3.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

//--------------------------------------------------------
//  Toggle Dark Mode Option
//--------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    function toggleDarkMode() {
        const zenElements = document.querySelectorAll(".zen");

        zenElements.forEach((element) => {
            element.classList.toggle("zen-dark");
        });

        const isDarkModeEnabled = Array.from(zenElements).some((element) => element.classList.contains("zen-dark"));
        localStorage.setItem("darkMode", isDarkModeEnabled);
    }

    const toggleButton = document.getElementById("toggleDarkMode");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }

    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
        const zenElements = document.querySelectorAll(".zen");
        zenElements.forEach((element) => {
            element.classList.add("zen-dark");
        });
    }
});
