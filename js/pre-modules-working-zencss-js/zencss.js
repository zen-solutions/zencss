/*
  * zenCSS v1.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 
// ----------------------------------------
// Define zenCSS elements for use in JS
// ----------------------------------------

// Define z-container custom element
class ZContainer extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("z-container", ZContainer);

// Define z-row custom element
class ZRow extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("z-row", ZRow);

// Define z-col custom element
class ZCol extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("z-col", ZCol);

//--------------------------------------------------------
//Toggle  test mode
//--------------------------------------------------------
// Check if the toggleButton exists
var toggleButton = document.getElementById("toggleButton");

if (toggleButton) {
    toggleButton.addEventListener("click", function () {
        const toggleClassOnElements = (selector, className) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                element.classList.toggle(className);
            });
        };

        const selectorsAndClasses = [
            // Presuming these are custom elements, the selectors are correct
            ["z-container", "z-container-outline-on"],
            ["z-container-fluid", "z-container-fluid-outline-on"],
            ["z-row", "z-row-outline-on"],
            ["z-col", "z-col-outline-on"],
            ["p", "p-outline-on"],
            ["h1", "h1-outline-on"],
            ["h2", "h2-outline-on"],
            ["h3", "h3-outline-on"],
            ["h4", "h4-outline-on"],
            ["h5", "h5-outline-on"],
            ["h6", "h6-outline-on"],
            [".center-line", "center-line-outline-on"],
        ];

        selectorsAndClasses.forEach(([selector, className]) => {
            toggleClassOnElements(selector, className);
        });
    });
} else {
    //console.log('Toggle button not found.');
}

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
//  Dark Mode Option
//--------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    function toggleDarkMode() {
        const zenElements = document.querySelectorAll(".zen");

        zenElements.forEach((element) => {
            element.classList.toggle("zen-dark");

            // If you want to store the dark mode state for each zen element,
            // you might use a data attribute or a more complex storage scheme.
        });

        // Update: Store a general dark mode state in localStorage
        // This will store whether any element has the zen-dark class
        const isDarkModeEnabled = Array.from(zenElements).some((element) =>
            element.classList.contains("zen-dark")
        );
        localStorage.setItem("darkMode", isDarkModeEnabled);
    }

    const toggleButton = document.getElementById("toggleDarkMode");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }

    // Update: Apply the zen-dark class based on stored preference
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
        const zenElements = document.querySelectorAll(".zen");
        zenElements.forEach((element) => {
            element.classList.add("zen-dark");
        });
    }
});

//--------------------------------------------------------
//Background image
//--------------------------------------------------------

window.addEventListener("DOMContentLoaded", function () {
    var imageContainers = document.querySelectorAll(".image-container");
    imageContainers.forEach(function (container) {
        var img = container.querySelector("img");
        var imgUrl = img.src;
        container.style.backgroundImage = "url(" + imgUrl + ")";
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center center";
        img.style.display = "none";
    });
});

//--------------------------------------------------------
// Mobile Nav
//--------------------------------------------------------
document.addEventListener("DOMContentLoaded", (event) => {
    const hamburgerButton = document.getElementById("hamburger-button");
    const closeButton = document.getElementById("close-button");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleMenu = () => {
        // Assuming "0px" is the open state and "-250px" is the closed state
        nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
        console.log("clicked");
    };

    if (hamburgerButton && closeButton && nav) {
        hamburgerButton.addEventListener("click", toggleMenu);
        closeButton.addEventListener("click", toggleMenu);

        navLinks.forEach((link) => {
        //    link.addEventListener("click", toggleMenu); // Use toggleMenu to close the menu
        });
    }
});

//--------------------------------------------------------
// Modal
//--------------------------------------------------------

class ZModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector(".close")
            .addEventListener("click", () => {
                this.close();
            });
        this.shadowRoot
            .querySelector(".modal")
            .addEventListener("click", (event) => {
                if (event.target === event.currentTarget) {
                    this.close();
                }
            });
        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("modal-close")) {
                this.close();
            }
        });
    
        const openModalButton = document.querySelector(".modal-open");
        if (openModalButton) {
            openModalButton.addEventListener("click", () => {
                this.open();
            });
        }
    }
        
    open() {
        this.shadowRoot.querySelector(".modal").style.display = "flex";
    }

    close() {
        this.shadowRoot.querySelector(".modal").style.display = "none";
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
            .modal {
                position: fixed;
                z-index: 10000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: none;
                align-items: center;
                justify-content: center;
            }
            .modal-wrapper {
                position: relative;
                width: 80%;
                max-width: 500px;
                border: 1px solid rgba(111,111,111,.35);
                border-radius: var(--border-radius, 8px);
                background-color: #f4f4f4;
                color: #424242;
                box-sizing: border-box;
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                padding: 10px 20px;
                border-bottom: 1px solid rgba(111,111,111,.35);
            }
            .modal-title {
                margin: 0;
                font-size: 1.5em;
            }
            .close {
                color: var(--dark-color, #aaa);
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
                border: none;
                background-color: transparent;
            }
            .close:hover,
            .close:focus {
                color: var(--cta-color, #f00);
            }
            .modal-body {
                padding: 20px;
                max-height: 300px;
                overflow-y: auto;
            }
            .modal-footer {
                display: flex;
                justify-content: flex-end;
                padding: 10px 10px;
                border-top: 1px solid rgba(111,111,111,.35);
            }

            @media only screen and (max-width: 767px) {
                .modal-body {
                    padding: 10px;
                    max-height: 220px;

                }
                .modal-wrapper {
                    width: 100%;
                }

            }
        </style>
        <div class="modal">
            <div class="modal-wrapper">
                <div class="modal-header">
                    <slot name="title"></slot>
                    <div class="title-spacer"></div>
                    <button class="close">&times;</button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <button class="modal-close">Close</button>
                        <button class="modal-save">Save</button>
                    </slot>
                </div>
            </div>
        </div>
        `;
    }
    
}

customElements.define("z-modal", ZModal);

// ----------------------------------------
// Star component
// ----------------------------------------
class StarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    static get observedAttributes() {
        return ["stars", "half"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const starCount = parseInt(this.getAttribute("stars")) || 1;
        const half = this.getAttribute("half") === "true";
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < starCount; i++) {
            const starImg = document.createElement("img");
            starImg.src = "../../img/general-icons/essential/star-solid.svg";
            starImg.alt = "";
            starImg.className = "icon icon-gold";
            fragment.appendChild(starImg);
        }

        if (half && starCount < 5) {
            const halfStarImg = document.createElement("img");
            halfStarImg.src =
                "../../img/general-icons/essential/star-half-stroke-regular.svg";
            halfStarImg.alt = "";
            halfStarImg.className = "icon icon-gold";
            fragment.appendChild(halfStarImg);
        }

        this.shadowRoot.innerHTML = `
            <style>
                .icon {
                    width: 24px;
                    height: 24px;
                }
				.icon-gold{
					width: 9px;
					filter: invert(85%) sepia(36%) saturate(2389%) hue-rotate(345deg) brightness(96%) contrast(97%);
				  }
				  
				  .icon-silver{
					width: 9px;
					filter: invert(50%) sepia(8%) saturate(15%) hue-rotate(314deg) brightness(103%) contrast(84%);
				  }
            </style>
        `;
        this.shadowRoot.appendChild(fragment);
    }
}

customElements.define("star-component", StarComponent);

// ----------------------------------------
// Image Slider/Carousel
// // ---------------------------------------
// Flag to indicate if the animation is in progress
let isAnimating = false;
let index1 = 0; // Current index of the slide
let slideWidth;

// Cache DOM elements
const slider = document.querySelector('.slider');
const slidesContainer = slider ? document.querySelector('.slides-container') : null;
const slides = slidesContainer ? Array.from(slidesContainer.children) : [];
const totalSlides = slides.length; // The actual total is minus one because the last is a duplicate

// Only proceed if there are slides
if (slides.length > 0) {
  slideWidth = slides[0].clientWidth; // Width of a single slide

  // Function to move to a specific slide
  function moveToSlide(slideIndex) {
    slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }

  // Event listener for when a transition ends on the slides container
  slidesContainer.addEventListener('transitionend', () => {
    // If we're at the duplicate of the first slide, reset to the true first slide
    if (index1 === totalSlides - 1) {
      slidesContainer.style.transition = 'none';
      index1 = 0;
      moveToSlide(index1);
    }
    // If we've moved to the first slide and we are animating backwards, jump to the last slide
    else if (index1 === 0 && isAnimating) {
      slidesContainer.style.transition = 'none';
      index1 = totalSlides - 2;
      moveToSlide(index1);
    }
  });

  // Update slide width on window resize
  window.addEventListener('resize', () => {
    slideWidth = slides[0].clientWidth;
    slidesContainer.style.transition = 'none';
    moveToSlide(index1);
  });

  // Click event delegation on the parent element
  slider.addEventListener('click', (event) => {
    // Next button logic
    if (event.target.classList.contains('next') && !isAnimating) {
      isAnimating = true;

      // Move to the next slide
      if (index1 < totalSlides - 1) {
        index1++;
      } else {
        // If at the end, wrap around to the first slide
        index1 = 0;
      }

      // Animate to the next slide
      slidesContainer.style.transition = 'transform 0.5s ease-out';
      moveToSlide(index1);

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }

    // Prev button logic
    if (event.target.classList.contains('prev') && !isAnimating) {
      isAnimating = true;

      // If at the first slide, wrap to the 'fake' last slide (duplicate of the first)
      if (index1 === 0) {
        slidesContainer.style.transition = 'none';
        index1 = totalSlides - 1;
        moveToSlide(index1);

        // Allow a frame re-draw to apply the 'none' transition, then apply the transition
        requestAnimationFrame(() => {
          slidesContainer.style.transition = 'transform 0.5s ease-out';
          index1 = totalSlides - 2;
          moveToSlide(index1);
        });
      } else {
        // Move to the previous slide
        index1--;
        slidesContainer.style.transition = 'transform 0.5s ease-out';
        moveToSlide(index1);
      }

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }
  });
}


// ----------------------------------------
// Hack for card with full screen image ;)
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        var image = card.querySelector(".img-full");
        if (image) {
            var imageHeight = image.offsetHeight + 13;
            card.style.paddingTop = imageHeight + "px";
        }
    });
});

// ----------------------------------------
// Accordian - autoclose when choosing a new option
// ----------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelector('.accordion');
  
    if (accordion) {
      const toggles = accordion.querySelectorAll('.toggle');
  
      toggles.forEach(toggle => {
        toggle.addEventListener('change', () => {
          // Define the expanded content area
          const contentArea = document.getElementById(toggle.id).nextElementSibling.nextElementSibling;
  
          if (toggle.checked) {
            // When the toggle is checked, set overflow to hidden to prevent scrollbar
            contentArea.style.overflow = 'hidden';
  
            // Set a timeout that matches your CSS transition time
            setTimeout(() => {
              // After the transition, set overflow to auto if content is taller than the container
              contentArea.style.overflow = 'auto';
            }, 500); // Adjust the time to match your CSS transition-duration
          } else {
            // When the toggle is not checked, immediately set overflow to hidden
            contentArea.style.overflow = 'hidden';
          }
  
          toggles.forEach(t => {
            if (t !== toggle) {
              t.checked = false;
              // Reset the overflow for other content areas that are not active
              t.nextElementSibling.nextElementSibling.style.overflow = 'hidden';
            }
          });
        });
      });
    }
  });
  

 
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
        localStorage.setItem('modalClosed', new Date().getTime());
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
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

// Check local storage to see if we should show the modal
function shouldShowModal() {
    var modalClosedTime = localStorage.getItem('modalClosed');
    if (modalClosedTime) {
        var now = new Date();
        var daysPassed = (now.getTime() - parseInt(modalClosedTime, 10)) / (1000 * 3600 * 24);
        return daysPassed >= 7;
    }
    return true;
}

// Trigger the modal after 8 seconds if the user hasn't closed it already
setTimeout(function() {
    document.addEventListener('mousemove', function(e) {
        if (e.clientY <= 5) {
            tryToShowModal();
        }
    });
}, 8000);


// ----------------------------------------
// Wizard
// ----------------------------------------

document.addEventListener("DOMContentLoaded", (event) => {
    const steps = document.querySelectorAll(".wizard-step");
    const navItems = document.querySelectorAll(".wizard-nav");

    if (steps.length > 0 && navItems.length > 0) {
        let currentStep = 1;
        const totalSteps = steps.length;

        function goToStep(stepNumber) {
            steps.forEach(step => {
                step.style.display = 'none'; // Hide all steps
            });
            document.getElementById(`step-${stepNumber}`).style.display = 'block'; // Show the desired step

            // Update the current class on pagination
            navItems.forEach(item => {
                if (item.dataset.step == stepNumber.toString()) {
                    item.classList.add('current');
                } else {
                    item.classList.remove('current');
                }
            });
        }

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                let direction = item.dataset.direction;
                if (direction) {
                    if (direction === 'next' && currentStep < totalSteps) {
                        currentStep++;
                    } else if (direction === 'prev' && currentStep > 1) {
                        currentStep--;
                    }
                } else if (item.dataset.step) {
                    currentStep = parseInt(item.dataset.step);
                }
                goToStep(currentStep);
            });
        });

        // Initialize the wizard to the first step
        goToStep(currentStep);
    }
});

// ----------------------------------------
// Tabs
// ----------------------------------------
 document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-nav .item');

    if(tabs.length > 0) {
        function removeCurrentClass() {
            tabs.forEach(tab => {
                tab.classList.remove('current');
            });
        }

        function setCurrentClass(event) {
            event.preventDefault();
            removeCurrentClass();
            event.target.classList.add('current');
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', setCurrentClass);
        });
    }
});


//-------------------------------------
//Spin
  //-------------------------------------

// This function will apply the spinning effect to the spinner if it exists
function startSpinning() {
    // Select the spinner element
    var spinner = document.querySelector('.rotate-spinner');
    
    // Check if the spinner exists to avoid errors
    if (spinner) {
      // Apply the CSS animation using inline styles
      spinner.style.animation = 'spin 2s linear infinite';
    }
  }
  
  // This function will start the spinning when the document is loaded, if the spinner exists
  document.addEventListener('DOMContentLoaded', startSpinning);


  //-------------------------------------
  //Poll
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function() {
    var currentStep = 1;
    var results = { a: 0, b: 0, c: 0, d: 0 };
    
    function updateStepDisplay(step) {
      var steps = document.querySelectorAll('.wizard-step');
      steps.forEach(function(stepDiv) {
        stepDiv.classList.remove('active');
      });
      document.querySelector('#step-' + step).classList.add('active');
    }
  
    function handleOptionSelect(event) {
      var selectedOption = event.target.value;
      results[selectedOption]++;
      if(currentStep < 4) {
        currentStep++;
        updateStepDisplay(currentStep);
      } else {
        // Call the showResult function immediately after the last selection
        showResult();
      }
    }
  
    function showResult() {
        // Remove the active class from all steps
        var steps = document.querySelectorAll('.wizard-step');
        steps.forEach(function(step) {
          step.classList.remove('active');
        });
      
        // Calculate the most chosen answer
        var max = Math.max(...Object.values(results));
        var mostChosenResults = Object.keys(results).filter(function(key) {
          return results[key] === max;
        });
      
        // Take the first result if there's a tie
        var mostChosen = mostChosenResults[0];
        var resultElement = document.querySelector('#result-types [data-result="' + mostChosen + '"]');
        var resultContent = resultElement ? resultElement.innerHTML : mostChosen;
      
        // Update the result div and make the result visible
        var resultDiv = document.getElementById('result-text');
        if(resultDiv) {
          resultDiv.innerHTML = resultContent;
        }
        var resultContainer = document.getElementById('result');
        if(resultContainer) {
          resultContainer.classList.add('active'); // Ensure this class makes the element visible
        }
      }
      
    // Attaching change event listeners to radio buttons
    var wizard = document.querySelector('.wizard');
    if(wizard) {
      var radioButtons = wizard.querySelectorAll('input[type="radio"]');
      radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', handleOptionSelect);
      });
    }
  });
  

  //-------------------------------------
  // Dynamic year in footer
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      const currentYear = new Date().getFullYear();
      yearSpan.textContent = currentYear;
    }
  });
  
  //-------------------------------------
  // Heart toggle
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    var heartToggle = document.querySelector('.heart-toggle');
    
    if (heartToggle) {
        heartToggle.addEventListener('click', function () {
            var emptyHeart = this.querySelector('.heart-empty');
            var filledHeart = this.querySelector('.heart-filled');

            if (emptyHeart && filledHeart) {
                emptyHeart.classList.toggle('show');
                filledHeart.classList.toggle('show');
            }
        });
    }
});

  //-------------------------------------
  // Nested containers - kill parent padding
  // BUG: Adding this functionality breaks convention with support for zentax and semantic. fix for semantic.
  //-------------------------------------
//   document.addEventListener('DOMContentLoaded', function () {
//     var columns = document.querySelectorAll('z-col');

//     columns.forEach(function (column) {
//         if (column.querySelector('z-container')) {
//             column.style.padding = '0';
//         }
//     });
// });

  //-------------------------------------
  // Nested containers - kill parent padding + if i am a row, and im inide a container that i neted in a column, then i need to have my martin top and bottom set to 0
  // BUG: Adding this functionality breaks convention with support for zentax and semantic. fix for semantic.
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    // Handle the padding for <z-col> elements
    var cols = document.querySelectorAll('z-col');

    cols.forEach(function (col) {
        if (col.querySelector('z-container')) {
            col.style.padding = '0';
        }
    });

    // Handle the margin for <z-row> elements within <z-container> inside <z-col>
    var rows = document.querySelectorAll('z-row');

    rows.forEach(function (row) {
        // Use closest to check if <z-row> is inside <z-container> and that <z-container> is inside <z-col>
        var container = row.closest('z-container');
        if (container && container.parentElement.tagName.toLowerCase() === 'z-col') {
            // Set the top and bottom padding of <z-row> to 0
            row.style.paddingTop = '0';
            row.style.paddingBottom = '0';
            console.log("There are no mistakes, only happy accidents. ");
        }
    });
});

  
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



//   document.addEventListener('DOMContentLoaded', function () {
//     var dropdownLinks = document.querySelectorAll('.dropdown-link');

//     dropdownLinks.forEach(function(link) {
//         // Create and insert the caret
//         var caret = document.createElement('div');
//         caret.className = 'caret-up';
//         link.parentNode.insertBefore(caret, link.nextSibling);

//         link.addEventListener('click', function (event) {
//             toggleDropdown(event, link, caret);
//         });
//     });
// });

// function toggleDropdown(event, link, caret) {
//     event.stopPropagation();
//     var dropdownContent = link.nextElementSibling.nextElementSibling;

//     if (dropdownContent) {
//         var isDropdownVisible = dropdownContent.style.display === "block";
//         dropdownContent.style.display = isDropdownVisible ? "none" : "block";
//         caret.style.display = isDropdownVisible ? "none" : "block";
//     }
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.dropdown-link')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var carets = document.getElementsByClassName("caret-up");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown && openDropdown.style.display === "block") {
//                 openDropdown.style.display = "none";
//                 if (carets[i]) {
//                     carets[i].style.display = "none";
//                 }
//             }
//         }
//     }
// }
