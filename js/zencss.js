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

// Get references to the necessary elements
var slidesContainer = document.querySelector(".slides-container");
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");

// Only proceed if all the necessary elements are found
if (slidesContainer && prevButton && nextButton) {
    var currentSlide = 0;
    var totalSlides = document.querySelectorAll(".slides-container img").length;

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    function showSlide(index) {
        var transformValue = "translateX(" + -index * 100 + "%)";
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
