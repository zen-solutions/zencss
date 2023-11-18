/*
* zenCSS v1.0.0 (https://zencss.com/)
* Copyright 2023-2023 Shaun Mackey
* Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
*/
 
  //-------------------------------------
  // Dropdown
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    var dropdownLinks = document.querySelectorAll('.dropdown-link');

    dropdownLinks.forEach(function(link) {
        // Create and insert the caret
        var caret = document.createElement('div');
        caret.className = 'caret-up';
        link.parentNode.insertBefore(caret, link.nextSibling);

        link.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            // Check if the current dropdown is already open
            var isCurrentDropdownOpen = link.nextElementSibling.nextElementSibling.style.display === "block";
            // Close all dropdowns
            closeAllDropdowns();
            // Toggle the current dropdown if it was not open
            if (!isCurrentDropdownOpen) {
                toggleDropdown(link.nextElementSibling.nextElementSibling, caret);
            }
        });
    });
});

function toggleDropdown(dropdownContent, caret) {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    caret.style.display = caret.style.display === "block" ? "none" : "block";
}

function closeAllDropdowns() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var carets = document.getElementsByClassName("caret-up");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
        carets[i].style.display = "none";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-link')) {
        closeAllDropdowns();
    }
};


