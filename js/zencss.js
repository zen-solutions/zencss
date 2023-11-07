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
document.getElementById("toggleButton").addEventListener("click", function () {
    const toggleClassOnElements = (selector, className) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.classList.toggle(className);
        });
    };

    const selectorsAndClasses = [
        [".z-container", "z-container-outline-on"],
        [".z-container-fluid", "z-container-fluid-outline-on"],
        [".z-row", "z-row-outline-on"],
        [".z-col", "z-col-outline-on"],
        ["z-container", "z-container-outline-on"],
        ["z-container-fluid", "z-container-fluid-outline-on"],
        ["z-row", "z-row-outline-on"],
        ["z-col", "z-col-outline-on"],
        ["p", "p-outline-on"],
        ["h1", "h1-outline-on"],
        ["h2", "h-outline-on"],
        ["h3", "h-outline-on"],
        ["h4", "h-outline-on"],
        ["h5", "h-outline-on"],
        ["h6", "h-outline-on"],
        [".center-line", "center-line-outline-on"],
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
        nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
    };

    if (hamburgerButton && closeButton && nav && navLinks.length > 0) {
        hamburgerButton.addEventListener("click", toggleMenu);
        closeButton.addEventListener("click", toggleMenu);

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                nav.style.left = "-250px";
            });
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
                background-color: rgba(255, 255, 255, 0.9);
                border: 1px solid #bbb;
                border-radius: var(--border-radius, 8px);
                box-sizing: border-box;
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                padding: 10px 20px;
                border-bottom: 1px solid #bbb;
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
                padding: 10px 20px;
                border-top: 1px solid #bbb;
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
            starImg.src = "../../img/general-icons/star-solid.svg";
            starImg.alt = "";
            starImg.className = "icon icon-gold";
            fragment.appendChild(starImg);
        }

        if (half && starCount < 5) {
            const halfStarImg = document.createElement("img");
            halfStarImg.src =
                "../../img/general-icons/star-half-stroke-regular.svg";
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

// Cache DOM elements
const slider = document.querySelector('.slider');
const slidesContainer = document.querySelector('.slides-container');
const slides = Array.from(slidesContainer.children);
const totalSlides = slides.length; // The actual total is minus one because the last is a duplicate
let slideWidth = slides[0].clientWidth; // Width of a single slide

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


// ----------------------------------------
// Hack for card with full screen image ;) dont @ me
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        var image = card.querySelector(".img-full");
        if (image) {
            var imageHeight = image.offsetHeight + 5;
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
                toggles.forEach(t => {
                    if (t !== toggle) {
                        t.checked = false;
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







