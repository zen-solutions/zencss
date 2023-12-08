// const body = document.querySelector("body"),
//   sidebar = body.querySelector("nav"),
//   toggle = body.querySelector(".toggle"),
//   searchBtn = body.querySelector(".search-z-row"),
//   modeSwitch = body.querySelector(".toggle-switch"),
//   modeText = body.querySelector(".mode-text");
// toggle.addEventListener("click", () => {
//   sidebar.classList.toggle("close");
// });

// modeSwitch.addEventListener("click", () => {
//   // Get all .zen elements
//   const zenElements = document.querySelectorAll('.zen');
  
//   // Convert NodeList to array and add the body element to the array
//   const allElements = Array.from(zenElements);
//   allElements.push(document.body);
  
//   // Toggle the zen-dark class on all elements in the array
//   allElements.forEach(element => {
//     element.classList.toggle('zen-dark');
//   });
  
//   // Update the modeText based on the body's class
//   modeText.innerText = body.classList.contains('zen-dark') ? "Light mode" : "Dark mode";
// });




//   //mobile menu stuff
//   document.addEventListener("DOMContentLoaded", function() {
//     let menuLinks = document.querySelectorAll("#menu a");
//     let checkbox = document.querySelector("#menuToggle input[type='checkbox']");

//     menuLinks.forEach(link => {
//         link.addEventListener("click", function() {
//             checkbox.checked = false;
//         });
//     });
// });


// //mobile correction for nav bar
// document.addEventListener("DOMContentLoaded", function() {
//   // Get all the anchor tags
//   const anchors = document.querySelectorAll("a[href^='#']");
  
//   anchors.forEach(anchor => {
//       anchor.addEventListener("click", function(event) {
//           // Prevent default behavior
//           event.preventDefault();

//           // Get  target element
//           const targetId = anchor.getAttribute("href");
//           const targetElement = document.querySelector(targetId);

//           if (targetElement) {
//               // Calculate scroll position
//               let yPos = targetElement.getBoundingClientRect().top + window.pageYOffset;

//               // Offset by the nav height on mobile
//               if (window.innerWidth <= 768) { 
//                   yPos -= 125; // height of top nav
//               }

//               window.scrollTo({ top: yPos, behavior: 'smooth' });
//           }
//       });
//   });
// });

// workaround for zen not on body and menu not changing
// document.addEventListener('DOMContentLoaded', () => {
//   function toggleZenClasses() {
//       const body = document.body;
      
//       if (body.classList.contains('zen-dark')) {
//           body.classList.remove('zen-dark');
//           body.classList.add('zen-light');
//       } else if (body.classList.contains('zen-light')) {
//           body.classList.remove('zen-light');
//           body.classList.add('zen-dark');
//       } else {
//           // Default to adding zen-light if neither class is present
//           body.classList.add('zen-light');
//       }
//   }

//   const zenToggleButton = document.getElementById('toggleDarkMode');
//   if (zenToggleButton) {
//       zenToggleButton.addEventListener('click', toggleZenClasses);
//   }
// });

