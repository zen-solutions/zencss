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


//--------------------
//Toggle  test mode
//--------------------

document.getElementById("toggleButton").addEventListener("click", function () {
  const containers = document.querySelectorAll(".z-container");
  const containersFluid = document.querySelectorAll(".z-container-fluid");
  const boxes = document.querySelectorAll(".z-row");
        const items = document.querySelectorAll(".z-col");
        const zen_containers = document.querySelectorAll("z-container");
        const zen_containersFluid = document.querySelectorAll("z-container-fluid");
        const zen_boxes = document.querySelectorAll("z-row");
        const zen_items = document.querySelectorAll("z-col");
        const paragraphs = document.querySelectorAll('p');
        const centerline = document.querySelectorAll('.center-line');
      
        containers.forEach((container) => {
          container.classList.toggle("z-container-outline-on");
        });

        containersFluid.forEach((containersFluid) => {
          containersFluid.classList.toggle("z-container-fluid-outline-on");
        });
      
        centerline.forEach((centerline) => {
          centerline.classList.toggle("center-line-outline-on");
        });

        boxes.forEach((box) => {
          box.classList.toggle("z-row-outline-on");
        });
      
        items.forEach((item) => {
          item.classList.toggle("z-col-outline-on");
        });

        zen_containers.forEach((zen_container) => {
          zen_container.classList.toggle("z-container-outline-on");
        });

        zen_containersFluid.forEach((zen_containersFluid) => {
          zen_containersFluid.classList.toggle("z-container-fluid-outline-on");
        });
      
        zen_boxes.forEach((zen_box) => {
          zen_box.classList.toggle("z-row-outline-on");
        });
      
        zen_items.forEach((zen_item) => {
          zen_item.classList.toggle("z-col-outline-on");
        });

        paragraphs.forEach((p) => {
          p.classList.toggle('p-outline-on');
        });
      });
      


// ----------------------------------------
// Bg-blur and opacity updates
// ----------------------------------------

const elements = document.querySelectorAll(
  '[class*="bg-opaque"], [class*="bg-blur"]'
);
elements.forEach((element) => {
  const descendants = element.querySelectorAll("*");
  descendants.forEach((descendant) => {
    descendant.style.opacity = "100%";
  });
});


// ----------------------------------------
// Testing: Dark Mode Toggle
// ----------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   const body = document.body;

//   if (body.classList.contains("zen-dark")) {
//       // Apply dark theme styles
//       body.style.backgroundColor = "#222";
//       body.style.color = "#fff";
//   // } else {
//   //     // Apply light theme styles
//   //     body.style.backgroundColor = "#d33331";
//   //     body.style.color = "#333";
//   // }
// });

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

// Toggle dark working. delete above. 
 // Function to toggle dark mode
 function toggleDarkMode() {
  const zenElements = document.querySelectorAll('.zen');
  zenElements.forEach(element => {
    element.classList.toggle('zen-dark');
  });
}



// Set up event listener on the Toggle Dark Mode button
document.getElementById('toggleDarkModeButton').addEventListener('click', toggleDarkMode);



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