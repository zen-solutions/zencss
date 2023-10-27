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


//--------------------------------------------------------
// Mobile Nav
//--------------------------------------------------------
document.addEventListener('DOMContentLoaded', (event) => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const closeButton = document.getElementById('close-button');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
      nav.style.left = nav.style.left === '0px' ? '-250px' : '0px';
  };

  if(hamburgerButton && closeButton && nav && navLinks.length > 0) {
      hamburgerButton.addEventListener('click', toggleMenu);
      closeButton.addEventListener('click', toggleMenu);

      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              nav.style.left = '-250px';
          });
      });
  } 
});

//--------------------------------------------------------
// Modal
//--------------------------------------------------------

var modal = document.querySelector(".modal");
var btn = document.querySelector(".btn-modal");
var span = document.querySelector(".close");

if (btn && modal && span) {  // Check if elements exist
    btn.onclick = function() {
        modal.style.display = "flex";  /* Change to flex when opening */
    }

    span.onclick = function() {
        modal.style.display = "none";  /* Change back to none when closing */
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";  /* Change back to none when closing */
        }
    }
}

// ----------------------------------------
// testimonial slider
// ----------------------------------------

// var slideFigure = document.getElementById('slide-figure');
// var slides = document.querySelectorAll('.carousel-slide');
// var totalSlides = slides.length;
// var currentSlide = 1;  // Set the initial slide to the first real slide
// var slideWidth = slides[0].offsetWidth;

// document.getElementById('prev').addEventListener('click', prevSlide);
// document.getElementById('next').addEventListener('click', nextSlide);

// function showSlide(index) {
//     slideFigure.style.transition = 'transform 0.3s ease-in-out';
//     slideFigure.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
// }

// function nextSlide() {
//     currentSlide++;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide--;
//     showSlide(currentSlide);
// }

// slideFigure.addEventListener('transitionend', function() {
//     slides = document.querySelectorAll('.carousel-slide');  // Update the slides NodeList
//     if (slides[currentSlide].id === 'lastClone') {
//         slideFigure.style.transition = 'none';
//         currentSlide = totalSlides - 1;
//         slideFigure.style.transform = 'translateX(' + (-currentSlide * slideWidth) + 'px)';
//         requestAnimationFrame(() => {
//             slideFigure.style.transition = 'transform 0.3s ease-in-out';
//         });
//     } else if (slides[currentSlide].id === 'firstClone') {
//         slideFigure.style.transition = 'none';
//         currentSlide = totalSlides;
//         slideFigure.style.transform = 'translateX(' + (-currentSlide * slideWidth) + 'px)';
//         requestAnimationFrame(() => {
//             slideFigure.style.transition = 'transform 0.3s ease-in-out';
//         });
//     }
// });

// ----------------------------------------
// Exit intent
// ----------------------------------------
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("btn-modal");
// var span = document.getElementsByClassName("close")[0];
// var sevenSecondsPassed = false;  // Flag to check if 7 seconds have passed

// function showModal() {
//     modal.style.display = "block";
//     document.removeEventListener('mousemove', checkExitIntent);  // Remove the mousemove event listener once the modal is shown
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// // Timer to check for 7 seconds
// setTimeout(function() {
//     sevenSecondsPassed = true;  // Set the flag to true after 7 seconds
// }, 7000);

// // Exit intent function
// function checkExitIntent(e) {
//     if(e.clientY <= 5 && sevenSecondsPassed) {  // Check for exit intent only if 7 seconds have passed
//         showModal();
//     }
// }

// // Exit intent
// document.addEventListener('mousemove', checkExitIntent);


// ----------------------------------------
// Image Slider/Carousel
// ---------------------------------------

// Get references to the necessary elements
var slidesContainer = document.querySelector('.slides-container');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

// Only proceed if all the necessary elements are found
if (slidesContainer && prevButton && nextButton) {
    var currentSlide = 0;
    var totalSlides = document.querySelectorAll('.slides-container img').length;

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    function showSlide(index) {
        var transformValue = 'translateX(' + (-index * 100) + '%)';
        slidesContainer.style.transform = transformValue;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
}




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