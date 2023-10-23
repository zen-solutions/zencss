// ----------------------------------------
// Define zenCSS elements for use in JS
// ----------------------------------------

// Define z-container custom element
class ZContainer extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('z-container', ZContainer);

// Define z-row custom element
class ZRow extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('z-row', ZRow);

// Define z-col custom element
class ZCol extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('z-col', ZCol);


//todo - write system to convert these to semanic structure for deployment


//--------------------------------------------------------
//Toggle  test mode
//--------------------------------------------------------
document.getElementById("toggleButton").addEventListener("click", function () {
  const toggleClassOnElements = (selector, className) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
          element.classList.toggle(className);
      });
  };

  const selectorsAndClasses = [
      ['.z-container', 'z-container-outline-on'],
      ['.z-container-fluid', 'z-container-fluid-outline-on'],
      ['.z-row', 'z-row-outline-on'],
      ['.z-col', 'z-col-outline-on'],
      ['z-container', 'z-container-outline-on'],
      ['z-container-fluid', 'z-container-fluid-outline-on'],
      ['z-row', 'z-row-outline-on'],
      ['z-col', 'z-col-outline-on'],
      ['p', 'p-outline-on'],
      ['h1', 'h1-outline-on'],
      ['h2', 'h-outline-on'],
      ['h3', 'h-outline-on'],
      ['h4', 'h-outline-on'],
      ['h5', 'h-outline-on'],
      ['h6', 'h-outline-on'],
      ['.center-line', 'center-line-outline-on']
  ];

  selectorsAndClasses.forEach(([selector, className]) => {
      toggleClassOnElements(selector, className);
  });
});


//--------------------------------------------------------
// Bg-blur and opacity overrides
//--------------------------------------------------------

const elements = document.querySelectorAll(
  '[class*="bg-opaque"], [class*="bg-blur"]'
);
elements.forEach((element) => {
  const descendants = element.querySelectorAll("*");
  descendants.forEach((descendant) => {
    descendant.style.opacity = "100%";
  });
});


//--------------------------------------------------------
// Testing: Dark Mode Toggle
//--------------------------------------------------------

function toggleDarkMode() {
  const zenElements = document.querySelectorAll('.zen');
  zenElements.forEach(element => {
    element.classList.toggle('zen-dark');
  });
}

document.getElementById('toggleDarkModeButton').addEventListener('click', toggleDarkMode);


//--------------------------------------------------------
//Background image
//--------------------------------------------------------

window.addEventListener('DOMContentLoaded', function () {
  var imageContainers = document.querySelectorAll('.image-container');
  imageContainers.forEach(function (container) {
      var img = container.querySelector('img');
      var imgUrl = img.src;
      container.style.backgroundImage = 'url(' + imgUrl + ')';
      container.style.backgroundSize = 'cover';
      container.style.backgroundPosition = 'center center';
      img.style.display = 'none';  

  });
});


// ----------------------------------------
// Experimental/not in use
// ----------------------------------------

// // bg image swap
//         // Get all elements with the class "background-image"
//         const backgroundImages = document.querySelectorAll('.background-image');

//         // Loop through each image
//         backgroundImages.forEach(image => {
//             // Get the parent div (child)
//             const parentDiv = image.parentElement;

//             // Set the background image of the parent div
//             parentDiv.style.backgroundImage = `url(${image.src})`;

//             // Hide the image
//             image.style.display = 'none';
//         });





// Text Type class

// const lines = document.querySelectorAll('#typewriter-container p');
// let totalDelay = 0;

// lines.forEach(line => {
//   const text = line.getAttribute('data-text');
//   let charIndex = 0;
  
//   setTimeout(() => {
//     const intervalId = setInterval(() => {
//       line.textContent += text[charIndex];
//       charIndex += 1;
//       if (charIndex === text.length) {
//         clearInterval(intervalId);
//         line.style.borderRight = 'none'; /* Hide cursor after typing */
//       }
//     }, 100); /* Speed of typing */
//   }, totalDelay);
  
//   totalDelay += text.length * 100 + 1000; /* Delay for next line (typing speed * text length + additional delay) */
// });