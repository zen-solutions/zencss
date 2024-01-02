// /*
//  * zenCSS v2.0.2-beta (https://zencss.com/)
//  * Copyright 2022-2024 Shaun Mackey
//  * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
//  */

//12/29 removing lazy load

/*
 * zenCSS v2.0.2-beta (https://zencss.com/)
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
                openModal(
                    clonedImg.src,
                    clonedImg.getAttribute("data-text"),
                    index,
                );
            });
            wrapper.appendChild(clonedImg);
            imageWrappers.push(wrapper);
        });

        const totalPages = Math.ceil(imageWrappers.length / imagesPerPage);

        function updateImagesForPage(pageNumber) {
            imageWrappers.forEach((wrapper, index) => {
                const start = (pageNumber - 1) * imagesPerPage;
                const end = start + imagesPerPage;
                wrapper.style.display =
                    index >= start && index < end ? "block" : "none";
            });
        }

        function updatePaginationNav() {
            paginationNav.innerHTML =
                '<a href="#" class="item" data-page="prev">&laquo;</a>';
            for (let i = 1; i <= totalPages; i++) {
                const classCurrent = i === currentPage ? "current" : "";
                paginationNav.innerHTML += `<a href="#" class="item ${classCurrent}" data-page="${i}">${i}</a>`;
            }
            paginationNav.innerHTML +=
                '<a href="#" class="item" data-page="next">&raquo;</a>';
        }

        function openModal(src, text, index) {
            currentModalIndex = index;
            const modalBody = modal.shadowRoot.querySelector(".modal-body");
            const modalWrapper =
                modal.shadowRoot.querySelector(".modal-wrapper");
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
                    currentModalIndex =
                        currentModalIndex > 0
                            ? currentModalIndex - 1
                            : imageWrappers.length - 1;
                    const newImg = imageWrappers[currentModalIndex].firstChild;
                    openModal(
                        newImg.src,
                        newImg.getAttribute("data-text"),
                        currentModalIndex,
                    );
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
                    currentModalIndex =
                        currentModalIndex < imageWrappers.length - 1
                            ? currentModalIndex + 1
                            : 0;
                    const newImg = imageWrappers[currentModalIndex].firstChild;
                    openModal(
                        newImg.src,
                        newImg.getAttribute("data-text"),
                        currentModalIndex,
                    );
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

                modalWrapper.style.maxWidth =
                    window.innerWidth >= 1070 ? "860px" : "80%";

                const nextIndex = (index + 1) % imageWrappers.length;
                const prevIndex =
                    (index - 1 + imageWrappers.length) % imageWrappers.length;
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
            const modalWrapper =
                modal.shadowRoot.querySelector(".modal-wrapper");
            if (modalWrapper) {
                modalWrapper.style.maxWidth =
                    window.innerWidth >= 1070 ? "860px" : "80%";
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
