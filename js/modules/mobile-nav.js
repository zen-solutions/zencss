/*
 * zenCSS v2.4.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

// //--------------------------------------------------------
// // Mobile Nav
// //--------------------------------------------------------
// document.addEventListener("DOMContentLoaded", (event) => {
//     const hamburgerButton = document.getElementById("hamburger-button");
//     const closeButton = document.getElementById("close-button");
//     const nav = document.querySelector("nav");
//     const navLinks = document.querySelectorAll(".nav-link");

//     const toggleMenu = () => {
//         nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
//     };

//     if (hamburgerButton && closeButton && nav) {
//         hamburgerButton.addEventListener("click", toggleMenu);
//         closeButton.addEventListener("click", toggleMenu);

//         navLinks.forEach((link) => {
//             //    link.addEventListener("click", toggleMenu); // Use toggleMenu to close the menu
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", (event) => {
    const hamburgerButton = document.getElementById("hamburger-button-2");
    const closeButton = document.getElementById("close-button");
    const nav = document.querySelector(".top-nav");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleMenu = () => {
        nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
    };

    if (hamburgerButton && closeButton && nav) {
        hamburgerButton.addEventListener("click", toggleMenu);
        closeButton.addEventListener("click", toggleMenu);

        navLinks.forEach((link) => {
            link.addEventListener("click", toggleMenu);
        });
    }
});
