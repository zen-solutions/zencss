/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 
var preElements = document.querySelectorAll('pre.copy-text');

preElements.forEach(function (textBox) {
    var copyButton = document.createElement('button');
    var copyText = textBox.innerText;

    // Create a span element with the desired text content for screen readers
    var srOnlySpan = document.createElement('span');
    srOnlySpan.textContent = 'Copy Text'; // Include your desired text here

    // Apply CSS to visually hide the span element while making it accessible
    srOnlySpan.style.cssText = 'position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px);';

    // Append the span to the button
    copyButton.appendChild(srOnlySpan);

    // Add the button to the textBox
    textBox.appendChild(copyButton);

    copyButton.addEventListener('click', function (event) {
        navigator.clipboard.writeText(copyText)
            .then(() => {
                copyButton.style.cssText = 'background-color: green !important; background-image: url("../images/ui/copied.png") !important;';
                setTimeout(function unCopy() {
                    copyButton.style.cssText = 'background-color: #ccc !important; background-image: url("../images/ui/copy.png") !important;';
                }, 1500);
            })
            .catch(err => {
                alert('Not enough permissions to copy text');
            });
    });
});


//   //fix for hamburger broken on docs
//   document.addEventListener("DOMContentLoaded", (event) => {
//     console.log("DOM fully loaded and parsed");

//     // Select the hamburger button by class
//     const hamburgerButton = document.querySelector(".docs-menu");
//     console.log("Hamburger Button:", hamburgerButton);

//     // Select the close button by ID
//     const closeButton = document.getElementById("close-button");
//     console.log("Close Button:", closeButton);

//     // Select the navigation element
//     const nav = document.querySelector("nav");
//     console.log("Nav Element:", nav);

//     // Define the toggleMenu function
//     const toggleMenu = () => {
//         console.log("toggleMenu function executed");
//         // Assuming "0px" is the open state and "-250px" is the closed state
//         nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
//     };

//     // Attach event listener to the hamburger button if it exists
//     if (hamburgerButton) {
//         hamburgerButton.addEventListener("click", () => {
//             console.log("Hamburger clicked");
//             toggleMenu();
//         });
//     }

//     // Attach event listener to the close button if it exists
//     if (closeButton) {
//         closeButton.addEventListener("click", toggleMenu);
//     }

//     // Optional: Attach event listeners to each navigation link
//     // Uncomment the following lines if you want to close the menu when a nav link is clicked
//     // const navLinks = document.querySelectorAll(".nav-link");
//     // navLinks.forEach((link) => {
//     //     link.addEventListener("click", toggleMenu);
//     // });
// });


//dupe hamburger for header page
document.addEventListener("DOMContentLoaded", (event) => {
	const hamburgerButton2 = document.getElementById("hamburger-button-2");
	const closeButton = document.getElementById("close-button");
	const nav = document.querySelector("nav");
  
	const toggleMenu = () => {
		nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
	};
  
	if (hamburgerButton2) {
		hamburgerButton2.addEventListener("click", toggleMenu);

  

	}
  });
  