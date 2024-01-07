/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************************!*\
  !*** ./modules/custom-elements.js ***!
  \************************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const slidesContainer = slider.querySelector(".slides-container");
        const originalSlides = Array.from(slidesContainer.children);
        const totalOriginalSlides = originalSlides.length;
        const nextButton = slider.querySelector(".next");
        const prevButton = slider.querySelector(".prev");
        const shouldAutoRotate = slider.getAttribute("data-auto-rotate") === "true";

        // Clone the first and last slides to create an infinite loop effect
        const firstSlideClone = originalSlides[0].cloneNode(true);
        const lastSlideClone = originalSlides[totalOriginalSlides - 1].cloneNode(true);
        slidesContainer.insertBefore(lastSlideClone, originalSlides[0]);
        slidesContainer.appendChild(firstSlideClone);

        let currentIndex = 1; // Start from the first original slide (not the clone)
        let isTransitioning = false;
        let autoRotate;

        // Function to start auto-rotating
        function startAutoRotate() {
            if (shouldAutoRotate) {
                autoRotate = setInterval(moveToNext, 4000);
            }
        }

        // Function to stop auto-rotating
        function stopAutoRotate() {
            clearInterval(autoRotate);
        }

        // Initialize position to the first original slide
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Re-enable transitions after initial positioning
        setTimeout(() => {
            slidesContainer.style.transition = "transform 0.5s ease";
        }, 0);

        function updateSlidePosition() {
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function moveToNext() {
            if (isTransitioning) return;
            currentIndex++;
            isTransitioning = true;
            updateSlidePosition();
        }

        function moveToPrev() {
            if (isTransitioning) return;
            currentIndex--;
            isTransitioning = true;
            updateSlidePosition();
        }

        slidesContainer.addEventListener("transitionend", () => {
            if (currentIndex >= totalOriginalSlides + 1) {
                slidesContainer.style.transition = "none";
                currentIndex = 1;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
                setTimeout(() => {
                    slidesContainer.style.transition = "transform 0.5s ease";
                }, 0);
            } else if (currentIndex === 0) {
                slidesContainer.style.transition = "none";
                currentIndex = totalOriginalSlides;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
                setTimeout(() => {
                    slidesContainer.style.transition = "transform 0.5s ease";
                }, 0);
            }
            isTransitioning = false;
        });

        nextButton.addEventListener("click", moveToNext);
        prevButton.addEventListener("click", moveToPrev);

        // Event listeners to stop/start auto-rotating
        slidesContainer.addEventListener("mouseenter", stopAutoRotate);
        slidesContainer.addEventListener("mouseleave", startAutoRotate);
        nextButton.addEventListener("mouseenter", stopAutoRotate);
        nextButton.addEventListener("mouseleave", startAutoRotate);
        prevButton.addEventListener("mouseenter", stopAutoRotate);
        prevButton.addEventListener("mouseleave", startAutoRotate);

        // Start auto-rotating for this slider
        startAutoRotate();
    });
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./modules/dropdown.js ***!
  \*****************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

//-------------------------------------
// Dropdown
//-------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var dropdownLinks = document.querySelectorAll(".dropdown .dropdown-link");

    dropdownLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Toggle the dropdown content visibility
            var dropdownContent = link.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                // Close all open dropdowns before opening the new one
                closeAllDropdowns();
                dropdownContent.style.display = "block";
            }
        });
    });
});

function closeAllDropdowns() {
    var dropdowns = document.querySelectorAll(".dropdown .dropdown-content");
    dropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
    });
}

// Close all dropdowns when clicking outside
window.onclick = function (event) {
    if (!event.target.matches(".dropdown-link")) {
        closeAllDropdowns();
    }
};

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************************!*\
  !*** ./modules/image-gallery.js ***!
  \**********************************/
// /*
//  * zenCSS v2.1.0-beta (https://zencss.com/)
//  * Copyright 2022-2024 Shaun Mackey
//  * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
//  */

//12/29 removing lazy load

/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

function preloadImage(src) {
    const img = new Image();
    img.src = src;
}

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".image-gallery");
    const modal = document.querySelector("z-modal");
    const paginationNav = document.querySelector(".pagination-nav");

    if (gallery && modal && paginationNav) {
        let currentPage = 1;
        const imagesPerPage = 15;
        let currentModalIndex = 0;
        const imageWrappers = [];

        Array.from(gallery.children).forEach((img, index) => {
            const wrapper = document.createElement("div");
            wrapper.style.display = index < imagesPerPage ? "block" : "none";
            const clonedImg = img.cloneNode(true);
            clonedImg.addEventListener("click", () => {
                currentModalIndex = index;
                openModal(clonedImg.src, clonedImg.getAttribute("data-text"), index);
            });
            wrapper.appendChild(clonedImg);
            imageWrappers.push(wrapper);
        });

        const totalPages = Math.ceil(imageWrappers.length / imagesPerPage);

        function updateImagesForPage(pageNumber) {
            imageWrappers.forEach((wrapper, index) => {
                const start = (pageNumber - 1) * imagesPerPage;
                const end = start + imagesPerPage;
                wrapper.style.display = index >= start && index < end ? "block" : "none";
            });
        }

        function updatePaginationNav() {
            paginationNav.innerHTML = '<a href="#" class="item" data-page="prev">&laquo;</a>';
            for (let i = 1; i <= totalPages; i++) {
                const classCurrent = i === currentPage ? "current" : "";
                paginationNav.innerHTML += `<a href="#" class="item ${classCurrent}" data-page="${i}">${i}</a>`;
            }
            paginationNav.innerHTML += '<a href="#" class="item" data-page="next">&raquo;</a>';
        }

        function openModal(src, text, index) {
            currentModalIndex = index;
            const modalBody = modal.shadowRoot.querySelector(".modal-body");
            const modalWrapper = modal.shadowRoot.querySelector(".modal-wrapper");
            const modalHeader = modal.shadowRoot.querySelector(".modal-header");

            if (modalBody && modalWrapper && modalHeader) {
                const currentWidth = modalWrapper.clientWidth;
                const currentHeight = modalWrapper.clientHeight;
                modalWrapper.style.minWidth = `${currentWidth}px`;
                modalWrapper.style.minHeight = `${currentHeight}px`;

                modalBody.innerHTML = "";
                const imageContainer = document.createElement("div");
                imageContainer.style.display = "flex";
                imageContainer.style.position = "relative";
                imageContainer.style.justifyContent = "center";

                const prevArrow = document.createElement("div");
                prevArrow.className = "prev arrow theme-dark";
                prevArrow.innerHTML = "❮";
                prevArrow.style.cursor = "pointer";
                prevArrow.style.position = "absolute";
                prevArrow.style.top = "50%";
                prevArrow.style.left = "7px";
                prevArrow.style.padding = "10px";
                prevArrow.style.backgroundColor = "rgba(255,255,255,.5)";
                prevArrow.style.transform = "translateY(-50%)";
                prevArrow.onclick = function () {
                    currentModalIndex = currentModalIndex > 0 ? currentModalIndex - 1 : imageWrappers.length - 1;
                    const newImg = imageWrappers[currentModalIndex].firstChild;
                    openModal(newImg.src, newImg.getAttribute("data-text"), currentModalIndex);
                };
                imageContainer.appendChild(prevArrow);

                const modalImage = document.createElement("img");
                modalImage.onload = () => {
                    modalWrapper.style.minWidth = "";
                    modalWrapper.style.minHeight = "";
                };
                modalImage.src = src;
                modalImage.style.maxWidth = "100%";
                modalImage.style.maxHeight = "60vh";
                modalImage.style.objectFit = "contain";
                modalImage.style.margin = "auto";
                imageContainer.appendChild(modalImage);

                const nextArrow = document.createElement("div");
                nextArrow.className = "next arrow theme-dark";
                nextArrow.innerHTML = "❯";
                nextArrow.style.cursor = "pointer";
                nextArrow.style.position = "absolute";
                nextArrow.style.padding = "10px";
                nextArrow.style.top = "50%";
                nextArrow.style.backgroundColor = "rgba(255,255,255,.5)";
                nextArrow.style.right = "7px";
                nextArrow.style.transform = "translateY(-50%)";
                nextArrow.onclick = function () {
                    currentModalIndex = currentModalIndex < imageWrappers.length - 1 ? currentModalIndex + 1 : 0;
                    const newImg = imageWrappers[currentModalIndex].firstChild;
                    openModal(newImg.src, newImg.getAttribute("data-text"), currentModalIndex);
                };
                imageContainer.appendChild(nextArrow);

                modalBody.appendChild(imageContainer);

                const modalText = document.createElement("p");
                modalText.textContent = text;
                modalText.style.textAlign = "center";
                modalBody.appendChild(modalText);

                modalBody.style.overflowY = "auto";
                modalBody.style.maxHeight = "80vh";
                modalHeader.style.display = "none";

                modalWrapper.style.maxWidth = window.innerWidth >= 1070 ? "860px" : "80%";

                const nextIndex = (index + 1) % imageWrappers.length;
                const prevIndex = (index - 1 + imageWrappers.length) % imageWrappers.length;
                preloadImage(imageWrappers[nextIndex].firstChild.src);
                preloadImage(imageWrappers[prevIndex].firstChild.src);

                modal.open();
            }
        }

        paginationNav.addEventListener("click", function (event) {
            event.preventDefault();
            const target = event.target;
            if (target.tagName === "A" && target.dataset.page) {
                let newPage = currentPage;
                if (target.dataset.page === "prev") {
                    newPage = currentPage > 1 ? currentPage - 1 : totalPages;
                } else if (target.dataset.page === "next") {
                    newPage = currentPage < totalPages ? currentPage + 1 : 1;
                } else {
                    newPage = parseInt(target.dataset.page);
                }

                if (newPage !== currentPage) {
                    currentPage = newPage;
                    updateImagesForPage(currentPage);
                    updatePaginationNav();
                }
            }
        });

        window.addEventListener("resize", function () {
            const modalWrapper = modal.shadowRoot.querySelector(".modal-wrapper");
            if (modalWrapper) {
                modalWrapper.style.maxWidth = window.innerWidth >= 1070 ? "860px" : "80%";
            }
        });

        gallery.innerHTML = "";
        imageWrappers.forEach((wrapper) => gallery.appendChild(wrapper));
        updateImagesForPage(currentPage);
        updatePaginationNav();
    }
});

// function preloadImage(src) {
//     const img = new Image();
//     img.src = src;
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const gallery = document.querySelector(".image-gallery");
//     const modal = document.querySelector("z-modal");
//     const paginationNav = document.querySelector(".pagination-nav");

//     if (gallery && modal && paginationNav) {
//         let currentPage = 1;
//         const imagesPerPage = 15;
//         let currentModalIndex = 0;
//         const imageWrappers = [];

//         Array.from(gallery.children).forEach((img, index) => {
//             const wrapper = document.createElement("div");
//             wrapper.classList.add("lazy-load"); // using the lazy-load class
//             wrapper.style.display = index < imagesPerPage ? "block" : "none";
//             const clonedImg = img.cloneNode(true);
//             clonedImg.addEventListener("click", () => {
//                 currentModalIndex = index;
//                 openModal(
//                     clonedImg.src,
//                     clonedImg.getAttribute("data-text"),
//                     index,
//                 );
//             });
//             wrapper.appendChild(clonedImg);
//             imageWrappers.push(wrapper);
//         });

//         const totalPages = Math.ceil(imageWrappers.length / imagesPerPage);

//         function updateImagesForPage(pageNumber) {
//             imageWrappers.forEach((wrapper, index) => {
//                 const start = (pageNumber - 1) * imagesPerPage;
//                 const end = start + imagesPerPage;
//                 wrapper.style.display =
//                     index >= start && index < end ? "block" : "none";
//             });
//         }

//         function updatePaginationNav() {
//             paginationNav.innerHTML =
//                 '<a href="#" class="item" data-page="prev">&laquo;</a>';
//             for (let i = 1; i <= totalPages; i++) {
//                 const classCurrent = i === currentPage ? "current" : "";
//                 paginationNav.innerHTML += `<a href="#" class="item ${classCurrent}" data-page="${i}">${i}</a>`;
//             }
//             paginationNav.innerHTML +=
//                 '<a href="#" class="item" data-page="next">&raquo;</a>';
//         }

//         function openModal(src, text, index) {
//             currentModalIndex = index;
//             const modalBody = modal.shadowRoot.querySelector(".modal-body");
//             const modalWrapper =
//                 modal.shadowRoot.querySelector(".modal-wrapper");
//             const modalHeader = modal.shadowRoot.querySelector(".modal-header");

//             if (modalBody && modalWrapper && modalHeader) {
//                 const currentWidth = modalWrapper.clientWidth;
//                 const currentHeight = modalWrapper.clientHeight;
//                 modalWrapper.style.minWidth = `${currentWidth}px`;
//                 modalWrapper.style.minHeight = `${currentHeight}px`;

//                 modalBody.innerHTML = "";
//                 const imageContainer = document.createElement("div");
//                 imageContainer.style.display = "flex";
//                 imageContainer.style.position = "relative";
//                 imageContainer.style.justifyContent = "center";

//                 const prevArrow = document.createElement("div");
//                 prevArrow.className = "prev arrow theme-dark";
//                 prevArrow.innerHTML = "❮";
//                 prevArrow.style.cursor = "pointer";
//                 prevArrow.style.position = "absolute";
//                 prevArrow.style.top = "50%";
//                 prevArrow.style.left = "7px";
//                 prevArrow.style.padding = "10px";
//                 prevArrow.style.backgroundColor = "rgba(255,255,255,.5)";
//                 prevArrow.style.transform = "translateY(-50%)";
//                 prevArrow.onclick = function () {
//                     currentModalIndex =
//                         currentModalIndex > 0
//                             ? currentModalIndex - 1
//                             : imageWrappers.length - 1;
//                     const newImg = imageWrappers[currentModalIndex].firstChild;
//                     openModal(
//                         newImg.src,
//                         newImg.getAttribute("data-text"),
//                         currentModalIndex,
//                     );
//                 };
//                 imageContainer.appendChild(prevArrow);

//                 const modalImage = document.createElement("img");
//                 modalImage.onload = () => {
//                     modalWrapper.style.minWidth = "";
//                     modalWrapper.style.minHeight = "";
//                 };
//                 modalImage.src = src;
//                 modalImage.style.maxWidth = "100%";
//                 modalImage.style.maxHeight = "60vh";
//                 modalImage.style.objectFit = "contain";
//                 modalImage.style.margin = "auto";
//                 imageContainer.appendChild(modalImage);

//                 const nextArrow = document.createElement("div");
//                 nextArrow.className = "next arrow theme-dark";
//                 nextArrow.innerHTML = "❯";
//                 nextArrow.style.cursor = "pointer";
//                 nextArrow.style.position = "absolute";
//                 nextArrow.style.padding = "10px";
//                 nextArrow.style.top = "50%";
//                 nextArrow.style.backgroundColor = "rgba(255,255,255,.5)";
//                 nextArrow.style.right = "7px";
//                 nextArrow.style.transform = "translateY(-50%)";
//                 nextArrow.onclick = function () {
//                     currentModalIndex =
//                         currentModalIndex < imageWrappers.length - 1
//                             ? currentModalIndex + 1
//                             : 0;
//                     const newImg = imageWrappers[currentModalIndex].firstChild;
//                     openModal(
//                         newImg.src,
//                         newImg.getAttribute("data-text"),
//                         currentModalIndex,
//                     );
//                 };
//                 imageContainer.appendChild(nextArrow);

//                 modalBody.appendChild(imageContainer);

//                 const modalText = document.createElement("p");
//                 modalText.textContent = text;
//                 modalText.style.textAlign = "center";
//                 modalBody.appendChild(modalText);

//                 modalBody.style.overflowY = "auto";
//                 modalBody.style.maxHeight = "80vh";
//                 modalHeader.style.display = "none";

//                 modalWrapper.style.maxWidth =
//                     window.innerWidth >= 1070 ? "860px" : "80%";

//                 const nextIndex = (index + 1) % imageWrappers.length;
//                 const prevIndex =
//                     (index - 1 + imageWrappers.length) % imageWrappers.length;
//                 preloadImage(imageWrappers[nextIndex].firstChild.src);
//                 preloadImage(imageWrappers[prevIndex].firstChild.src);

//                 modal.open();
//             }
//         }

//         paginationNav.addEventListener("click", function (event) {
//             event.preventDefault();
//             const target = event.target;
//             if (target.tagName === "A" && target.dataset.page) {
//                 let newPage = currentPage;
//                 if (target.dataset.page === "prev") {
//                     newPage = currentPage > 1 ? currentPage - 1 : totalPages;
//                 } else if (target.dataset.page === "next") {
//                     newPage = currentPage < totalPages ? currentPage + 1 : 1;
//                 } else {
//                     newPage = parseInt(target.dataset.page);
//                 }

//                 if (newPage !== currentPage) {
//                     currentPage = newPage;
//                     updateImagesForPage(currentPage);
//                     updatePaginationNav();
//                 }
//             }
//         });

//         window.addEventListener("resize", function () {
//             const modalWrapper =
//                 modal.shadowRoot.querySelector(".modal-wrapper");
//             if (modalWrapper) {
//                 modalWrapper.style.maxWidth =
//                     window.innerWidth >= 1070 ? "860px" : "80%";
//             }
//         });

//         gallery.innerHTML = "";
//         imageWrappers.forEach((wrapper) => gallery.appendChild(wrapper));
//         updateImagesForPage(currentPage);
//         updatePaginationNav();
//     }
// });

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************!*\
  !*** ./modules/accordian.js ***!
  \******************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener("DOMContentLoaded", function () {
    var accordionToggles = document.querySelectorAll(".accordion-toggle");

    accordionToggles.forEach(function (accordionToggle) {
        accordionToggle.addEventListener("click", function () {
            // Determine if the clicked toggle is being expanded
            var isExpanding = this.getAttribute("aria-expanded") === "false";

            // Remove active class from all toggles and reset icons
            accordionToggles.forEach(function (otherToggle) {
                otherToggle.classList.remove("active-toggle");
                otherToggle.setAttribute("aria-expanded", "false");

                var otherIcon = otherToggle.querySelector(".zenicon-keyboard-arrow-right, .zenicon-keyboard-arrow-down");
                if (otherIcon) {
                    otherIcon.classList.remove("zenicon-keyboard-arrow-down");
                    otherIcon.classList.add("zenicon-keyboard-arrow-right");
                }

                var otherPanel = otherToggle.nextElementSibling;
                otherPanel.style.overflow = "hidden"; // Set overflow to hidden during transition
                otherPanel.style.maxHeight = null;
                otherPanel.setAttribute("aria-hidden", "true"); // Hide other panels
            });

            // Set the clicked toggle as active if it's expanding
            if (isExpanding) {
                this.classList.add("active-toggle");
                this.setAttribute("aria-expanded", "true");

                var icon = this.querySelector(".zenicon-keyboard-arrow-right, .zenicon-keyboard-arrow-down");
                if (icon) {
                    icon.classList.remove("zenicon-keyboard-arrow-right");
                    icon.classList.add("zenicon-keyboard-arrow-down");
                }

                var panel = this.nextElementSibling;
                panel.style.maxHeight = panel.scrollHeight > 200 ? "1000px" : panel.scrollHeight + 10 + "px";
                panel.setAttribute("aria-hidden", "false"); // Show the current panel

                // Wait for the transition to end before setting overflow to auto
                setTimeout(function() {
                    panel.style.overflow = "auto";
                }, 300); // Replace 300 with the duration of your transition
            }
        });
    });
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./modules/misc.js ***!
  \*************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

//-------------------------------------
// Dynamic year in footer
//-------------------------------------
document.addEventListener("DOMContentLoaded", (event) => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});

//-------------------------------------
// icon toggle
//-------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var iconToggles = document.querySelectorAll(".icon-toggle");

    iconToggles.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            var iconOff = this.querySelector(".icon-off");
            var iconOn = this.querySelector(".icon-on");

            // Toggle the 'show' class
            iconOff.classList.toggle("show");
            iconOn.classList.toggle("show");
        });
    });
});

// New stuff here after modules were created. If we need to revert, include this stuff.
document.querySelectorAll(".accordion-toggle").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const contentId = item.getAttribute("aria-controls");
        const content = document.getElementById(contentId);

        // Close other expanded contents
        document.querySelectorAll(".expanded-content").forEach((el) => {
            if (el.id !== contentId) {
                el.classList.remove("show");
                el.style.overflowY = "hidden";
            }
        });

        // Toggle current content
        content.classList.toggle("show");

        setTimeout(() => {
            if (content.scrollHeight > content.clientHeight) {
                content.style.overflowY = "auto";
            } else {
                content.style.overflowY = "hidden";
            }
        }, 500);
    });
});

//-------------------------------------
// Corner Popup
//-------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var cornerPopup = document.querySelector(".corner-popup");

    if (cornerPopup) {
        var button = cornerPopup.querySelector("button");
        var popup = cornerPopup.querySelector("div");

        popup.classList.add("card");

        button.addEventListener("click", function () {
            popup.classList.toggle("hidden");
            console.log("Button clicked");
        });
    }
});

//-------------------------------------
// Responsive Table
//-------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Function to apply data labels to a table
    function applyDataLabelsToTable(table) {
        // Get all the headers from the direct child thead of the table
        const headers = Array.from(table.querySelectorAll(":scope > thead > tr > th")).map((th) => th.textContent.trim());

        // Iterate over each row in the direct child tbody of the table
        table.querySelectorAll(":scope > tbody > tr").forEach((row) => {
            // Get all cells (td) in this row
            row.querySelectorAll(":scope > td").forEach((cell, index) => {
                // Assign the corresponding header text to the data-label attribute of the cell
                if (headers[index]) {
                    cell.setAttribute("data-label", headers[index]);
                }
            });
        });
    }

    // Select all tables with class 'responsive-table' and apply data labels to each
    document.querySelectorAll(".responsive-table").forEach(applyDataLabelsToTable);
});

//-------------------------------------
// Lazy Load Test - WIP
//-------------------------------------

// document.addEventListener("DOMContentLoaded", function() {
//     const lazyLoadImages = document.querySelectorAll("img.lazy-load");

//     if (lazyLoadImages.length > 0) {
//       const imageObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//           if (entry.isIntersecting) {
//             const image = entry.target;
//             image.src = image.dataset.src;
//             image.classList.remove("lazy-load");
//             imageObserver.unobserve(image);
//           }
//         });
//       });

//       lazyLoadImages.forEach(function(image) {
//         imageObserver.observe(image);
//       });
//     }
//   });

//-------------------------------------
// Tabbed Card
//-------------------------------------

// function showTab(tabNumber) {
//     const tabbedCard = document.querySelector(".tabbed-card");
//     if (tabbedCard) {
//         const tabs = tabbedCard.querySelectorAll(".tab");
//         const tabContents = tabbedCard.querySelectorAll(".tab-content");

//         if (tabs.length && tabContents.length) {
//             tabs.forEach((tab, index) => {
//                 if (index + 1 === tabNumber) {
//                     tab.classList.add("active");
//                     if (tabContents[index]) {
//                         tabContents[index].classList.add("active");
//                     }
//                 } else {
//                     tab.classList.remove("active");
//                     if (tabContents[index]) {
//                         tabContents[index].classList.remove("active");
//                     }
//                 }
//             });
//         }
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const tabs = document.querySelectorAll(".tab");
//     if (tabs.length) {
//         tabs.forEach((tab) => {
//             tab.addEventListener("click", function () {
//                 const tabNumber = parseInt(tab.getAttribute("data-tab"));
//                 showTab(tabNumber);
//             });
//         });
//     }
// });

//-------------------------------------
// side menus
//-------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Select all the menu items
    const menuItems = document.querySelectorAll(".nav-menu li");

    // Only proceed if menu items exist
    if (menuItems.length) {
        menuItems.forEach((item) => {
            // Add click event listener to each menu item
            item.addEventListener("click", function () {
                // Remove the 'active' class from all items
                menuItems.forEach((i) => i.classList.remove("active"));

                // Add the 'active' class to the clicked item
                this.classList.add("active");
            });
        });
    }
});

//-------------------------------------
// unread notifications
//-------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".btn-circle");

    // Check if the button exists
    if (button) {
        // Restore the data-unread attribute if 24 hours have not passed
        var unreadResetTime = localStorage.getItem("unreadResetTime");
        if (unreadResetTime && new Date().getTime() < unreadResetTime) {
            button.removeAttribute("data-unread");
        }

        // Add click event listener to the button
        button.addEventListener("click", function () {
            // Remove data-unread attribute and set the reset time in localStorage
            button.removeAttribute("data-unread");
            var resetTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
            localStorage.setItem("unreadResetTime", resetTime);
        });
    }
});

//-------------------------------------
// fade in animation
//-------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".fade-in");

    if (elementsToAnimate.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.3,
            },
        );

        elementsToAnimate.forEach((el) => observer.observe(el));
    }
});

//   //pie charts
//   document.addEventListener('DOMContentLoaded', () => {
//     const chart = document.querySelector('.zen-pie-chart');
//     let accumulatedRotation = 0;

//     document.querySelectorAll('.zen-pie-chart .zen-slice').forEach(slice => {
//         const percentage = parseFloat(slice.dataset.percentage);
//         const rotation = 360 * (percentage / 100);
//         const sliceRotation = accumulatedRotation + rotation / 2;

//         // Set styles and classes for the slice
//         slice.style.transform = `rotate(${sliceRotation}deg)`;
//         slice.style.clip = `rect(0px, ${chart.clientWidth}px, ${chart.clientWidth}px, ${chart.clientWidth / 2}px)`;
//         slice.style.backgroundColor = getComputedStyle(slice).backgroundColor;
//         slice.style.opacity = '1';

//         // For more than 50%, create an overlay slice to simulate the additional percentage
//         if (percentage > 50) {
//             let overlaySlice = document.createElement('div');
//             overlaySlice.classList.add('zen-slice', 'overlay');
//             overlaySlice.style.backgroundColor = slice.style.backgroundColor;
//             overlaySlice.style.position = 'absolute';
//             overlaySlice.style.width = '100%';
//             overlaySlice.style.height = '100%';
//             overlaySlice.style.transform = `rotate(${sliceRotation + 180}deg)`;
//             overlaySlice.style.clip = `rect(0px, ${chart.clientWidth}px, ${chart.clientWidth}px, ${chart.clientWidth / 2}px)`;
//             chart.appendChild(overlaySlice);
//         }

//         accumulatedRotation += rotation;
//     });
// });

//-------------------------------------
// Pattern Interrupt
//-------------------------------------
//   document.addEventListener('DOMContentLoaded', function() {
//     var modalShown = false;
//     var modal = document.querySelector('.pattern-interrupt');
//     var modal2 = document.querySelector('.modal');

//     function showModal() {
//         if (!modal) return; // Exit if no modal found

//         // Center the modal in the viewport
//         modal.style.display = 'block';
//         modal2.style.display = 'block';
//         modal.style.position = 'fixed'; // Fixed position
//         modal.style.top = '50%'; // Center vertically
//         modal.style.left = '50%'; // Center horizontally
//         modal.style.transform = 'translate(-50%, -50%)'; // Adjust for modal's dimensions

//         modalShown = true;
//     }

//     function checkScroll() {
//         if (modalShown) return; // Skip if the modal is already shown

//         var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//         var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         var scrolledPercentage = (scrollPosition / totalHeight) * 100;

//         if (scrolledPercentage > 10) {
//             showModal();
//         }
//     }

//     // Attach the scroll event listener only if the modal exists
//     if (modal) {
//         window.addEventListener('scroll', checkScroll);
//     }
// });

//-------------------------------------
// Dynamic Navigation
//-------------------------------------
//   document.addEventListener('DOMContentLoaded', function() {
//     const header = document.querySelector('.header-sticky.slide-down');
//     console.log("Script running");
//     if (header) {
//       fetch('../docs/navigation.html')  // Assuming navigation.html is in the /docs folder
//         .then(response => response.text())
//         .then(data => {
//           header.innerHTML = data;
//         })
//         .catch(error => console.error('Error loading navigation:', error));
//     }
//   });

//   //-------------------------------------
//   // Video Player
//   //-------------------------------------

//   class VideoPlayer extends HTMLElement {
//     constructor() {
//         super();
//         const shadowRoot = this.attachShadow({ mode: 'open' });

//         const style = document.createElement('style');
//         style.textContent = `

//         `;

//         const container = document.createElement('div');
//         container.className = 'video-container';

//         const video = document.createElement('video');
//         video.className = 'video-player';
//         video.controls = true;

//         const src = this.getAttribute('src');
//         if (src) {
//             const source = document.createElement('source');
//             source.src = src;
//             source.type = 'video/mp4';
//             video.appendChild(source);
//         } else {
//             console.error('Video source not provided for <video-player>.');
//         }

//         container.appendChild(video);
//         shadowRoot.appendChild(style);
//         shadowRoot.appendChild(container);
//     }
// }

// customElements.define('video-player', VideoPlayer);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************!*\
  !*** ./modules/dark-mode.js ***!
  \******************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

//--------------------------------------------------------
//  Toggle Dark Mode Option
//--------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    function toggleDarkMode() {
        const zenElements = document.querySelectorAll(".zen");

        zenElements.forEach((element) => {
            element.classList.toggle("zen-dark");
        });

        const isDarkModeEnabled = Array.from(zenElements).some((element) => element.classList.contains("zen-dark"));
        localStorage.setItem("darkMode", isDarkModeEnabled);
    }

    const toggleButton = document.getElementById("toggleDarkMode");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }

    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
        const zenElements = document.querySelectorAll(".zen");
        zenElements.forEach((element) => {
            element.classList.add("zen-dark");
        });
    }
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************!*\
  !*** ./modules/lazy-load.js ***!
  \******************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll(".zen img.lazy-load"));

    if (lazyImages.length === 0) {
        //console.log('No lazy-load images found.');
        return;
    }

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    // Set onload before changing the src
                    lazyImage.onload = function () {
                        this.classList.remove("lazy-load");
                        //console.log('Lazy-load class removed:', this);
                    };
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        lazyImages.forEach(function (lazyImage) {
            lazyImage.onload = function () {
                this.classList.remove("lazy-load");
                //console.log('Lazy-load class removed:', this);
            };
            lazyImage.src = lazyImage.dataset.src;
        });
    }
});

//old depricated - leaving for now to reference to what was done for image gallery

// document.addEventListener("DOMContentLoaded", function () {
//     const images = document.querySelectorAll(".lazy-load");

//     if (images.length > 0) {
//         const imageObserver = new IntersectionObserver((entries, observer) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     const image = entry.target;
//                     image.setAttribute("aria-busy", "true"); // Indicate loading
//                     const newSrc = image.getAttribute("data-src");

//                     // Create a new Image to load in the background
//                     const img = new Image();
//                     img.onload = function () {
//                         image.src = newSrc; // Set src when fully loaded
//                         image.removeAttribute("aria-busy"); // Remove loading indication
//                     };
//                     img.src = newSrc;

//                     image.classList.remove("lazy-load");
//                     observer.unobserve(image);
//                 }
//             });
//         });

//         images.forEach((image) => {
//             imageObserver.observe(image);
//         });
//     }
// });

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************************!*\
  !*** ./modules/background-image.js ***!
  \*************************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*******************************!*\
  !*** ./modules/mobile-nav.js ***!
  \*******************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

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
        this.shadowRoot.querySelector(".close").addEventListener("click", () => {
            this.close();
        });
        this.shadowRoot.querySelector(".modal").addEventListener("click", (event) => {
            if (event.target === event.currentTarget) {
                this.close();
            }
        });
        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("modal-close")) {
                this.close();
            }

            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    this.close();
                }
            });
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
              border: 1px solid rgba(111,111,111,.35);
              border-radius: var(--border-radius, 4px);
              background-color: #f4f4f4;
              color: #424242;
              box-sizing: border-box;
              max-width:500px;
          }
          
          .modal-header {
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
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
              position:relative:

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
              padding: 0 10px;
              border-top: 1px solid rgba(111,111,111,.35);
              margin-left: 10px;
              margin-right: 10px;
          }

          @media only screen and (max-width: 767px) {
              .modal-body {
                  padding: 10px;
                  max-height: 220px;

              }
              .modal-wrapper {
                  width: 99%;
                  max-width:100% !important;
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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************!*\
  !*** ./modules/star-component.js ***!
  \***********************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

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
            starImg.src = "../../dist/img/icons/alerts/star-solid.svg";
            starImg.alt = "";
            starImg.className = "icon icon-gold";
            fragment.appendChild(starImg);
        }

        if (half && starCount < 5) {
            const halfStarImg = document.createElement("img");
            halfStarImg.src = "../../dist/img/icons/alerts/star-half-stroke-regular.svg";
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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!********************************!*\
  !*** ./modules/exit-intent.js ***!
  \********************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!****************************!*\
  !*** ./modules/sidebar.js ***!
  \****************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const activeIndicator = document.getElementById("activeIndicator");
    const menuItems = document.querySelectorAll("#sidebar ul li");
    const rail = document.getElementById("rail");
    const closeButton = document.querySelector(".close");
    const tabButton = document.getElementById("tab-button");
    const icon = document.querySelector("#tab-button i");

    // Find the navigation element
    const navigationElement = document.querySelector("#sidebar nav");

    // Check if sidebar exists
    if (sidebar) {
        // Find all elements with class "sidebar-content"
        const sidebarContents = document.querySelectorAll(".sidebar-content");

        function updateIndicator() {
            let menuHeight = 0;
            menuItems.forEach((item) => {
                menuHeight += item.offsetHeight;
            });

            // Calculate the height of the navigation element
            const navigationHeight = navigationElement.offsetHeight;

            rail.style.height = `${navigationHeight - 17}px`;

            const activeItem = document.querySelector(".active");
            if (activeItem) {
                activeIndicator.style.height = `${activeItem.offsetHeight}px`;
                activeIndicator.style.top = `${activeItem.offsetTop + 28}px`; // Updated position
            }
        }

        function handleMenuItemClick(event) {
            menuItems.forEach((item) => item.classList.remove("active"));
            event.currentTarget.classList.add("active");
            updateIndicator();

            // Check window width and hide sidebar if less than 768 pixels
            if (window.innerWidth < 768) {
                sidebar.style.left = "-250px";

                // Toggle the classes for all "sidebar-content" elements
                sidebarContents.forEach((element) => {
                    element.classList.remove("sidebar-content");
                    element.classList.add("sidebar-content-off");
                });

                // Toggle the class for the tab button
                tabButton.classList.remove("tab-button-off");
                tabButton.classList.add("tab-button");
            }

            // Show the tab button if the sidebar is closed
            if (sidebar.style.left === "-250px") {
                tabButton.style.display = "block";
            }
        }

        menuItems.forEach((item) => {
            item.addEventListener("click", handleMenuItemClick);
        });

        updateIndicator();

        // Close button functionality
        if (closeButton) {
            closeButton.addEventListener("click", function () {
                sidebar.style.left = "-250px";
                tabButton.style.display = "block";
                icon.style.transform = "rotate(180deg)"; // Rotate the icon

                // Toggle the classes for all "sidebar-content" elements
                sidebarContents.forEach((element) => {
                    element.classList.remove("sidebar-content");
                    element.classList.add("sidebar-content-off");
                });

                // Toggle the class for the tab button
                tabButton.classList.remove("tab-button-off");
                tabButton.classList.add("tab-button");
            });
        }

        // Tab button functionality
        if (tabButton) {
            tabButton.addEventListener("click", function () {
                if (sidebar.style.left === "-250px") {
                    sidebar.style.left = "0";
                    tabButton.style.display = "none";
                    icon.style.transform = "rotate(0deg)"; // Reset the icon rotation

                    // Toggle the classes for all "sidebar-content" elements
                    sidebarContents.forEach((element) => {
                        element.classList.remove("sidebar-content-off");
                        element.classList.add("sidebar-content");
                    });

                    // Toggle the class for the tab button
                    tabButton.classList.remove("tab-button");
                    tabButton.classList.add("tab-button-off");
                } else {
                    sidebar.style.left = "-250px";

                    // Toggle the classes for all "sidebar-content" elements
                    sidebarContents.forEach((element) => {
                        element.classList.remove("sidebar-content");
                        element.classList.add("sidebar-content-off");
                    });

                    // Toggle the class for the tab button
                    //tabButton.classList.remove("tab-button-off");
                    //tabButton.classList.add("tab-button");
                }
            });
        }
    }
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***************************!*\
  !*** ./modules/wizard.js ***!
  \***************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

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
            steps.forEach((step) => {
                step.style.display = "none"; // Hide all steps
            });
            document.getElementById(`step-${stepNumber}`).style.display = "block"; // Show the desired step

            // Update the current class on pagination
            navItems.forEach((item) => {
                if (item.dataset.step == stepNumber.toString()) {
                    item.classList.add("current");
                } else {
                    item.classList.remove("current");
                }
            });
        }

        navItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                let direction = item.dataset.direction;
                if (direction) {
                    if (direction === "next" && currentStep < totalSteps) {
                        currentStep++;
                    } else if (direction === "prev" && currentStep > 1) {
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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************************!*\
  !*** ./modules/multistep-wizard.js ***!
  \*************************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

document.addEventListener("DOMContentLoaded", function () {
    const mswizard = document.querySelector(".mswizard");
    if (!mswizard) return;
    const progressBar = mswizard.querySelector(".mswizard-progress");
    const currentStepSpan = mswizard.querySelector("#current-step");
    const totalStepsSpan = mswizard.querySelector("#total-steps");
    const progressPercentage = mswizard.querySelector(".progress-percentage");
    const steps = mswizard.querySelectorAll(".mswizard-step");
    const totalSteps = steps.length;
    totalStepsSpan.textContent = totalSteps;
    progressBar.max = 100;

    function updatemswizardStep(stepNumber) {
        steps.forEach((step) => (step.style.display = "none"));
        mswizard.querySelector(`#step-${stepNumber}`).style.display = "block";
        currentStepSpan.textContent = stepNumber;
        const progressValue = ((stepNumber - 1) / (totalSteps - 1)) * 100;
        progressBar.value = progressValue;
        progressPercentage.textContent = `${Math.round(progressValue)}%`;
        const percentagePosition = progressBar.offsetWidth * (progressValue / 100) - progressPercentage.offsetWidth / 2;
        progressPercentage.style.left = `${Math.max(0, percentagePosition)}px`;
        progressPercentage.style.visibility = progressValue >= 5 ? "visible" : "hidden";
    }

    steps.forEach((step, index) => {
        if (index === totalSteps - 1) return; // No buttons on the last step

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        // Always add the Previous button except on the last step
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.className = "prev-btn";
        prevButton.setAttribute("role", "button");
        prevButton.setAttribute("aria-label", `Go back to step ${index}`);
        if (index === 0) {
            prevButton.disabled = true;
            prevButton.classList.add("disabled");
        } else {
            prevButton.addEventListener("click", () => updatemswizardStep(index));
        }
        buttonContainer.appendChild(prevButton);

        // Add the Next/Finish button to all steps except the last
        const nextButton = document.createElement("button");
        nextButton.textContent = index === totalSteps - 2 ? "Finish" : "Next";
        nextButton.className = "next-btn";
        nextButton.setAttribute("role", "button");
        nextButton.setAttribute("aria-label", `Go to step ${index + 2}`);
        nextButton.addEventListener("click", () => updatemswizardStep(index + 2));
        buttonContainer.appendChild(nextButton);

        step.appendChild(buttonContainer);
    });

    updatemswizardStep(1);
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

// ----------------------------------------
// Tabs
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-nav .item");

    if (tabs.length > 0) {
        function removeCurrentClass() {
            tabs.forEach((tab) => {
                tab.classList.remove("current");
            });
        }

        function setCurrentClass(event) {
            event.preventDefault();
            removeCurrentClass();
            event.target.classList.add("current");
        }

        tabs.forEach((tab) => {
            tab.addEventListener("click", setCurrentClass);
        });
    }
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./modules/poll.js ***!
  \*************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

//-------------------------------------
//Poll
//-------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var currentStep = 1;
    var results = { a: 0, b: 0, c: 0, d: 0 };

    function updateStepDisplay(step) {
        var steps = document.querySelectorAll(".wizard-step");
        steps.forEach(function (stepDiv) {
            stepDiv.classList.remove("active");
        });
        document.querySelector("#step-" + step).classList.add("active");
    }

    function handleOptionSelect(event) {
        var selectedOption = event.target.value;
        results[selectedOption]++;
        if (currentStep < 4) {
            currentStep++;
            updateStepDisplay(currentStep);
        } else {
            // Call the showResult function immediately after the last selection
            showResult();
        }
    }

    function showResult() {
        // Remove the active class from all steps
        var steps = document.querySelectorAll(".wizard-step");
        steps.forEach(function (step) {
            step.classList.remove("active");
        });

        // Calculate the most chosen answer
        var max = Math.max(...Object.values(results));
        var mostChosenResults = Object.keys(results).filter(function (key) {
            return results[key] === max;
        });

        // Take the first result if there's a tie
        var mostChosen = mostChosenResults[0];
        var resultElement = document.querySelector('#result-types [data-result="' + mostChosen + '"]');
        var resultContent = resultElement ? resultElement.innerHTML : mostChosen;

        // Update the result div and make the result visible
        var resultDiv = document.getElementById("result-text");
        if (resultDiv) {
            resultDiv.innerHTML = resultContent;
        }
        var resultContainer = document.getElementById("result");
        if (resultContainer) {
            resultContainer.classList.add("active"); // Ensure this class makes the element visible
        }
    }

    // Attaching change event listeners to radio buttons
    var wizard = document.querySelector(".wizard");
    if (wizard) {
        var radioButtons = wizard.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(function (radioButton) {
            radioButton.addEventListener("change", handleOptionSelect);
        });
    }
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!********************************!*\
  !*** ./modules/link-scroll.js ***!
  \********************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */
document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    if (anchors.length > 0) {
        anchors.forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                const hrefAttribute = this.getAttribute("href");

                // Skip processing if href is only '#'
                if (hrefAttribute === "#") {
                    return;
                }

                e.preventDefault();
                const targetElement = document.querySelector(hrefAttribute);

                if (targetElement) {
                    // Get the target element's top position relative to the document
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                    // Scroll to the position minus 100 pixels
                    window.scrollTo({
                        top: targetPosition - 100,
                        behavior: "smooth"
                    });
                }
            });
        });
    }
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************!*\
  !*** ./modules/cookie-consent.js ***!
  \***********************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

document.addEventListener("DOMContentLoaded", (event) => {
    const banner = document.querySelector(".cookie-consent-banner");

    // Check if the banner element exists
    if (banner) {
        const acceptBtn = document.querySelector(".accept-cookies");
        banner.style.zIndex = "1100";

        // Check if cookies are already accepted
        if (!localStorage.getItem("cookies-accepted")) {
            banner.style.display = "block"; // Show banner if cookies not accepted
        }

        // Event listener for accept button
        if (acceptBtn) {
            acceptBtn.addEventListener("click", () => {
                localStorage.setItem("cookies-accepted", "true"); // Set flag in local storage
                banner.style.display = "none"; // Hide banner
            });
        }
    }
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************!*\
  !*** ./modules/test-mode.js ***!
  \******************************/
/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

//--------------------------------------------------------
//Toggle  test mode
//--------------------------------------------------------

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
}

})();

/******/ })()
;
//# sourceMappingURL=zencss.js.map