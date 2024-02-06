document.addEventListener("DOMContentLoaded", function () {
    var navHtml = `
        <div class="docs-nav">
        <a id="hamburger-button"><img src="/dist/img/icons/bars.svg" class="icon-header" alt="Menu"></a>
        </div>
        <nav class="top-nav sticky-nav">
        <button id="close-button" aria-label="Close"><a class="close"></a></button>
        <ul class="pr-2">
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Section 1</a>
                <div class="dropdown-content">
                <a href="#">Submenu item 1</a>
                <a href="#">Submenu item 2</a>
                <a href="#">Submenu item 3</a>
          

</div></div>

            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Section 2</a>
                <div class="dropdown-content">
                <a href="#">Submenu item 1</a>
                <a href="#">Submenu item 2</a>
                <a href="#">Submenu item 3</a>     
                </div>
            </div>
            
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Section 3</a>
                <div class="dropdown-content">
                <a href="#">Submenu item 1</a>
                <a href="#">Submenu item 2</a>
                <a href="#">Submenu item 3</a>     
                </div>
            </div>
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Section 4</a>
                <div class="dropdown-content megamenu">
                   <z-container class="narrow-left-sm">
                        <z-row>
                            <z-col class="small">
                            <a href="#">Submenu item 1</a>
                            <a href="#">Submenu item 2</a>
                            <a href="#">Submenu item 3</a>     
                            </z-col>
                            <z-col class="small">
                            <a href="#">Submenu item 1</a>
                            <a href="#">Submenu item 2</a>
                            <a href="#">Submenu item 3</a>     
                            </z-col>
                            <z-col class="small">
                            <a href="#">Submenu item 1</a>
                            <a href="#">Submenu item 2</a>
                            <a href="#">Submenu item 3</a>   
                            </z-col>
                        </z-row>
                    </z-container>
                </div>
            </div>
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Section 5</a>
                <div class="dropdown-content left-150">
                <a href="#">Submenu item 1</a>
                <a href="#">Submenu item 2</a>
                <a href="#">Submenu item 3</a>   
                </div>
            </div>
        </ul>
    </nav>
        `;

    var navPlaceholder = document.getElementById("nav-placeholder");
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHtml;
        initializeDropdowns();
        bindHamburgerFunctionality();
        addPrevNextLinks();
    }

    function initializeDropdowns() {
        var dropdownLinks = document.querySelectorAll(".dropdown-link");
        dropdownLinks.forEach(function (link) {
            var caret = document.createElement("div");
            caret.className = "caret-up";
            link.parentNode.insertBefore(caret, link.nextSibling);
            link.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                var isCurrentDropdownOpen = link.nextElementSibling.nextElementSibling.style.display === "block";
                closeAllDropdowns();
                if (!isCurrentDropdownOpen) {
                    toggleDropdown(link.nextElementSibling.nextElementSibling, caret);
                }
            });
        });

        window.onclick = function (event) {
            if (!event.target.matches(".dropdown-link")) {
                closeAllDropdowns();
            }
        };
    }

    function toggleDropdown(dropdownContent, caret) {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        caret.style.display = caret.style.display === "block" ? "none" : "block";
    }

    function closeAllDropdowns() {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        var carets = document.querySelectorAll(".caret-up");
        dropdowns.forEach(function (dropdown) {
            dropdown.style.display = "none";
        });
        carets.forEach(function (caret) {
            caret.style.display = "none";
        });
    }

    function bindHamburgerFunctionality() {
        const hamburgerButton = document.getElementById("hamburger-button");
        const closeButton = document.getElementById("close-button");
        const nav = document.querySelector("nav");

        const toggleMenu = () => {
            nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
        };

        if (hamburgerButton) {
            hamburgerButton.addEventListener("click", toggleMenu);
        }

        if (closeButton) {
            closeButton.addEventListener("click", toggleMenu);
        }
    }

    // function addPrevNextLinks() {
    //     var links = document.querySelectorAll(".dropdown-content a");
    //     var currentUrl = window.location.href;
    //     var pages = Array.from(links).map((a) => a.href);
    //     var currentIndex = pages.findIndex((url) => url === currentUrl);

    //     var prevNextHtml = '<z-container-fluid class="prev-next theme-light mt-5">';
    //     prevNextHtml += '<z-row class="down-5"><z-col class="text-center"><p class="p-0 mb-0">You might also like..</p></z-col></z-row>';
    //     prevNextHtml += '<z-row class="gap-0">';

    //     var hasPrev = currentIndex > 0;
    //     var hasNext = currentIndex < pages.length - 1;

    //     if (hasPrev) {
    //         var prevUrl = pages[currentIndex - 1];
    //         var prevTitle = links[currentIndex - 1].textContent;
    //         prevNextHtml += `<z-col class="${
    //             hasNext ? "text-right tablet:text-center" : "text-center"
    //         } p-0"><a class="btn btn-cta btn-xl text-xs" href="${prevUrl}">Prev: ${prevTitle}</a></z-col>`;
    //     }

    //     if (hasNext) {
    //         var nextUrl = pages[currentIndex + 1];
    //         var nextTitle = links[currentIndex + 1].textContent;
    //         prevNextHtml += `<z-col class="${
    //             hasPrev ? "p-0 tablet:text-center" : "text-center"
    //         }"><a class="btn btn-cta btn-xl text-xs" href="${nextUrl}">Next: ${nextTitle}</a></z-col>`;
    //     }

    //     prevNextHtml += "</z-row></z-container-fluid>";

    //     var footer = document.querySelector("footer");
    //     footer.insertAdjacentHTML("beforebegin", prevNextHtml);
    // }
});
