document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.image-gallery');
    const modal = document.querySelector('z-modal');
    const paginationNav = document.querySelector('.pagination-nav');

    if (gallery && modal && paginationNav) {
        let currentPage = 1;
        const imagesPerPage = 15;

        // Wrap images in divs for pagination and attach click listeners
        const imageWrappers = Array.from(gallery.children).map((img, index) => {
            const wrapper = document.createElement('div');
            wrapper.style.display = index < imagesPerPage ? 'block' : 'none'; // Show first page initially
            const clonedImg = img.cloneNode(true);
            clonedImg.addEventListener('click', () => openModal(clonedImg.src, clonedImg.getAttribute('data-text')));
            wrapper.appendChild(clonedImg);
            return wrapper;
        });

        // Clear original images and append wrapped images
        gallery.innerHTML = '';
        imageWrappers.forEach(wrapper => gallery.appendChild(wrapper));

        const totalPages = Math.ceil(imageWrappers.length / imagesPerPage);

        function openModal(src, text, currentIndex) {
            const modalBody = modal.shadowRoot.querySelector('.modal-body');
            const modalWrapper = modal.shadowRoot.querySelector('.modal-wrapper');
            const modalHeader = modal.shadowRoot.querySelector('.modal-header');

            if (modalBody && modalWrapper && modalHeader) {
                modalBody.innerHTML = '';

                const modalImage = document.createElement('img');
                modalImage.src = src;
                modalImage.style.cssText = 'max-width: 100%; max-height: 60vh; border-radius: 8px; object-fit: contain; margin-bottom: 10px;';
                modalBody.appendChild(modalImage);

                const modalText = document.createElement('p');
                modalText.textContent = text;
                modalText.style.cssText = 'text-align: center; margin-top: 0;';
                modalBody.appendChild(modalText);

                modalBody.style.overflowY = 'auto';
                modalBody.style.maxHeight = '80vh';
                modalHeader.style.display = 'none';

                if (window.innerWidth >= 1070) {
                    modalWrapper.style.maxWidth = '860px';
                } else {
                    modalWrapper.style.maxWidth = '80%';
                }

                modal.open();
            }
        }

        function updateImagesForPage(pageNumber) {
            imageWrappers.forEach((wrapper, index) => {
                const start = (pageNumber - 1) * imagesPerPage;
                const end = start + imagesPerPage;
                wrapper.style.display = index >= start && index < end ? 'block' : 'none';
            });
        }

        function updatePaginationNav() {
            paginationNav.innerHTML = '<a href="#" class="item" data-page="prev">&laquo;</a>';
            for (let i = 1; i <= totalPages; i++) {
                const classCurrent = i === currentPage ? 'current' : '';
                paginationNav.innerHTML += `<a href="#" class="item ${classCurrent}" data-page="${i}">${i}</a>`;
            }
            paginationNav.innerHTML += '<a href="#" class="item" data-page="next">&raquo;</a>';

            paginationNav.addEventListener('click', function (event) {
                event.preventDefault();
                const target = event.target;
                if (target.tagName === 'A' && target.dataset.page) {
                    const newPage = target.dataset.page === 'prev' ? Math.max(1, currentPage - 1)
                                    : target.dataset.page === 'next' ? Math.min(totalPages, currentPage + 1)
                                    : parseInt(target.dataset.page);

                    if (newPage !== currentPage) {
                        currentPage = newPage;
                        updateImagesForPage(currentPage);
                        updatePaginationNav();
                    }
                }
            });
        }

        window.addEventListener('resize', function() {
            const modalWrapper = modal.shadowRoot.querySelector('.modal-wrapper');
            if (modalWrapper) {
                modalWrapper.style.maxWidth = window.innerWidth >= 1070 ? '1070px' : '80%';
            }
        });

        updatePaginationNav();
        updateImagesForPage(currentPage);
    } else {
        console.log("Required elements (gallery, modal, or paginationNav) not found");
    }
});
