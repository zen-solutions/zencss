/*
 * zenCSS v2.2.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const activeIndicator = document.getElementById("activeIndicator");
    const menuItems = document.querySelectorAll("#sidebar ul li");
    const rail = document.getElementById("rail");
    const closeButton = document.querySelector(".close");
    const tabButton = document.getElementById("tab-button");
    const icon = document.querySelector("#tab-button i");

    // Find the navigation element
    const navigationElement = document.querySelector("#sidebar nav");

    // Check if sidebar exists
    if (sidebar) {
        // Find all elements with class "sidebar-content"
        const sidebarContents = document.querySelectorAll(".sidebar-content");

        function updateIndicator() {
            let menuHeight = 0;
            menuItems.forEach((item) => {
                menuHeight += item.offsetHeight;
            });

            // Calculate the height of the navigation element
            const navigationHeight = navigationElement.offsetHeight;

            rail.style.height = `${navigationHeight - 17}px`;

            const activeItem = document.querySelector(".active");
            if (activeItem) {
                activeIndicator.style.height = `${activeItem.offsetHeight}px`;
                activeIndicator.style.top = `${activeItem.offsetTop + 28}px`; // Updated position
            }
        }

        function handleMenuItemClick(event) {
            menuItems.forEach((item) => item.classList.remove("active"));
            event.currentTarget.classList.add("active");
            updateIndicator();

            // Check window width and hide sidebar if less than 768 pixels
            if (window.innerWidth < 768) {
                sidebar.style.left = "-250px";

                // Toggle the classes for all "sidebar-content" elements
                sidebarContents.forEach((element) => {
                    element.classList.remove("sidebar-content");
                    element.classList.add("sidebar-content-off");
                });

                // Toggle the class for the tab button
                tabButton.classList.remove("tab-button-off");
                tabButton.classList.add("tab-button");
            }

            // Show the tab button if the sidebar is closed
            if (sidebar.style.left === "-250px") {
                tabButton.style.display = "block";
            }
        }

        menuItems.forEach((item) => {
            item.addEventListener("click", handleMenuItemClick);
        });

        updateIndicator();

        // Close button functionality
        if (closeButton) {
            closeButton.addEventListener("click", function () {
                sidebar.style.left = "-250px";
                tabButton.style.display = "block";
                icon.style.transform = "rotate(180deg)"; // Rotate the icon

                // Toggle the classes for all "sidebar-content" elements
                sidebarContents.forEach((element) => {
                    element.classList.remove("sidebar-content");
                    element.classList.add("sidebar-content-off");
                });

                // Toggle the class for the tab button
                tabButton.classList.remove("tab-button-off");
                tabButton.classList.add("tab-button");
            });
        }

        // Tab button functionality
        if (tabButton) {
            tabButton.addEventListener("click", function () {
                if (sidebar.style.left === "-250px") {
                    sidebar.style.left = "0";
                    tabButton.style.display = "none";
                    icon.style.transform = "rotate(0deg)"; // Reset the icon rotation

                    // Toggle the classes for all "sidebar-content" elements
                    sidebarContents.forEach((element) => {
                        element.classList.remove("sidebar-content-off");
                        element.classList.add("sidebar-content");
                    });

                    // Toggle the class for the tab button
                    tabButton.classList.remove("tab-button");
                    tabButton.classList.add("tab-button-off");
                } else {
                    sidebar.style.left = "-250px";

                    // Toggle the classes for all "sidebar-content" elements
                    sidebarContents.forEach((element) => {
                        element.classList.remove("sidebar-content");
                        element.classList.add("sidebar-content-off");
                    });

                    // Toggle the class for the tab button
                    //tabButton.classList.remove("tab-button-off");
                    //tabButton.classList.add("tab-button");
                }
            });
        }
    }
});
