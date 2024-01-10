/*
 * zenCSS v2.2.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

// ----------------------------------------
// Tabs
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-nav .item");

    if (tabs.length > 0) {
        function removeCurrentClass() {
            tabs.forEach((tab) => {
                tab.classList.remove("current");
            });
        }

        function setCurrentClass(event) {
            event.preventDefault();
            removeCurrentClass();
            event.target.classList.add("current");
        }

        tabs.forEach((tab) => {
            tab.addEventListener("click", setCurrentClass);
        });
    }
});
