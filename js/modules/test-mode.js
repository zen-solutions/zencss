/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2024 Shaun Mackey
  * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
  */
 
//--------------------------------------------------------
//Toggle  test mode
//--------------------------------------------------------

var toggleButton = document.getElementById("toggleButton");

if (toggleButton) {
    toggleButton.addEventListener("click", function () {
        const toggleClassOnElements = (selector, className) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                element.classList.toggle(className);
            });
        };

        const selectorsAndClasses = [
            ["z-container", "z-container-outline-on"],
            ["z-container-fluid", "z-container-fluid-outline-on"],
            ["z-row", "z-row-outline-on"],
            ["z-col", "z-col-outline-on"],
            ["p", "p-outline-on"],
            ["h1", "h1-outline-on"],
            ["h2", "h2-outline-on"],
            ["h3", "h3-outline-on"],
            ["h4", "h4-outline-on"],
            ["h5", "h5-outline-on"],
            ["h6", "h6-outline-on"],
            [".center-line", "center-line-outline-on"],
        ];

        selectorsAndClasses.forEach(([selector, className]) => {
            toggleClassOnElements(selector, className);
        });
    });
} 
