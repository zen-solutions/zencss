/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2024 Shaun Mackey
  * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
  */

//-------------------------------------
// Dropdown
//-------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    var dropdownLinks = document.querySelectorAll('.dropdown .dropdown-link');

    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Toggle the dropdown content visibility
            var dropdownContent = link.nextElementSibling;
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                // Close all open dropdowns before opening the new one
                closeAllDropdowns();
                dropdownContent.style.display = 'block';
            }
        });
    });
});

function closeAllDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown .dropdown-content');
    dropdowns.forEach(function(dropdown) {
        dropdown.style.display = 'none';
    });
}

// Close all dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-link')) {
        closeAllDropdowns();
    }
};
