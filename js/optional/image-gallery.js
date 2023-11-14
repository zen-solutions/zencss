/*
  * zenCSS v1.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.image-gallery');
    const modal = document.querySelector('z-modal');
    const paginationNav = document.querySelector('.pagination-nav');
    let currentPage = 1;
    const imagesPerPage = 15;

    // Extract image data from the HTML elements
    const images = Array.from(gallery.children).map(img => ({
        src: img.src,
        text: img.getAttribute('data-text') 
    }));

    const totalPages = Math.ceil(images.length / imagesPerPage);

    // Create and style image and text elements for the modal
    function openModal(src, text) {
        const modalImage = document.createElement('img');
        modalImage.src = src;
        modalImage.style.maxWidth = '100%';
        modalImage.style.maxHeight = '60vh'; // Adjusted to leave space for text
        modalImage.style.borderRadius = '8px'; 
        modalImage.style.objectFit = 'contain';
        modalImage.style.marginBottom = '10px'; 

        const modalText = document.createElement('p');
        modalText.textContent = text;
        modalText.style.textAlign = 'center';
        modalText.style.marginTop = '0'; 

        // Clear and update modal body
        const modalBody = modal.shadowRoot.querySelector('.modal-body');
        modalBody.innerHTML = '';
        modalBody.style.overflowY = 'auto'; // Enable scroll only if necessary
        modalBody.appendChild(modalImage);
        modalBody.appendChild(modalText);

        // Increase the size for bigger screens
        modalBody.style.maxHeight = '80vh'; // Increased to allow more content

        const modalWrapper = modal.shadowRoot.querySelector('.modal-wrapper');
        if (modalWrapper) {
            modalWrapper.style.maxWidth = '50%'; 
        }

        // Hide the modal header
        const modalHeader = modal.shadowRoot.querySelector('.modal-header');
        if (modalHeader) {
            modalHeader.style.display = 'none';
        }

        // Open the modal
        modal.open();
    }

    function loadImagesForPage(pageNumber) {
        gallery.innerHTML = '';
        const startIndex = (pageNumber - 1) * imagesPerPage;
        const endIndex = Math.min(startIndex + imagesPerPage, images.length);
        const pageImages = images.slice(startIndex, endIndex);

        pageImages.forEach(imageObj => {
            const imgElement = document.createElement('img');
            imgElement.src = imageObj.src;
            imgElement.alt = 'Gallery Image';
            imgElement.setAttribute('data-text', imageObj.text);
            imgElement.onclick = () => openModal(imageObj.src, imageObj.text);
            gallery.appendChild(imgElement);
        });
    }

    function updatePaginationNav() {
        paginationNav.innerHTML = '<a href="#" class="item" data-page="prev">&laquo;</a>';
        for (let i = 1; i <= totalPages; i++) {
            const classCurrent = i === currentPage ? 'current' : '';
            paginationNav.innerHTML += `<a href="#" class="item ${classCurrent}" data-page="${i}">${i}</a>`;
        }
        paginationNav.innerHTML += '<a href="#" class="item" data-page="next">&raquo;</a>';
    }

    paginationNav.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'A' && target.dataset.page) {
            if (target.dataset.page === 'prev') {
                currentPage = Math.max(1, currentPage - 1);
            } else if (target.dataset.page === 'next') {
                currentPage = Math.min(totalPages, currentPage + 1);
            } else {
                currentPage = parseInt(target.dataset.page);
            }
            loadImagesForPage(currentPage);
            updatePaginationNav();
        }
    });

    updatePaginationNav();
    loadImagesForPage(currentPage);
});