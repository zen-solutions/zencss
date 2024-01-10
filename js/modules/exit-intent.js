/*
 * zenCSS v2.2.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

// ----------------------------------------
// Exit Intent
// ----------------------------------------
// Get the modal
var modal = document.querySelector(".exit");

// Function to show the modal if conditions are met
function tryToShowModal() {
    if (modal && shouldShowModal() && !modalIsDisplayed()) {
        modal.style.display = "block";
    }
}

// Function to hide modal and set a flag in local storage
function closeModal() {
    if (modal) {
        modal.style.display = "none";
        // Set the flag in local storage with the current timestamp
        localStorage.setItem("modalClosed", new Date().getTime());
    }
}

// Check if the modal is currently displayed
function modalIsDisplayed() {
    return modal.style.display === "block";
}

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
if (span) {
    span.onclick = closeModal;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

// Check local storage to see if we should show the modal
function shouldShowModal() {
    var modalClosedTime = localStorage.getItem("modalClosed");
    if (modalClosedTime) {
        var now = new Date();
        var daysPassed = (now.getTime() - parseInt(modalClosedTime, 10)) / (1000 * 3600 * 24);
        return daysPassed >= 7;
    }
    return true;
}

// Trigger the modal after 8 seconds if the user hasn't closed it already
setTimeout(function () {
    document.addEventListener("mousemove", function (e) {
        if (e.clientY <= 5) {
            tryToShowModal();
        }
    });
}, 8000);
