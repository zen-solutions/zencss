document.addEventListener("DOMContentLoaded", function () {
    var navHtml = `
        <div class="docs-nav">
        <a id="hamburger-button"><img src="../../dist/img/icons/bars.svg" class="icon-header" alt="Menu"></a>
        </div>
        <nav class="top-nav sticky-nav">
        <button id="close-button" aria-label="Close"><a class="close"></a></button>
        <ul class="pr-2">
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Help Desk</a>
                <div class="dropdown-content">
                    <a href="../help-desk/index.html">Quick-Start Guide</a>
                    <a href="../help-desk/what-is-zencss.html">What is zenCSS?</a>
                    <a href="../help-desk/installation.html">Installation</a>
                    <a href="../help-desk/features.html">Features</a>
                    <a href="../examples/zentax.html">Intro to Zentax</a>     
                    <a href="../examples/zen-system.html">The ZEN Ideology</a>                      
                    <a href="../help-desk/contributing.html">Contributing</a>     
                    <a href="../examples/about.html">About</a>     
                </div>
            </div>

            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Features</a>
                <div class="dropdown-content">
                    <a href="../examples/smart-align-framework.html">Smart-Align Framework</a>
                    <a href="../examples/smart-color-system.html">Smart-Color System</a>
                    <a href="../examples/smart-text.html">Smart-Text System</a>  
                    <a href="../examples/themes.html">Themes & Modes</a>          
                    <a href="../help-desk/site-sections.html">Site Sections</a>
                    <a href="../help-desk/site-parts.html">Components</a>
                    <a href="../help-desk/utilities.html">Utilities</a>            

                </div>
            </div>
            
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Site Sections</a>
                <div class="dropdown-content">
   
                    <a href="../examples/header.html">Header</a>
                    <a href="../examples/jumbotron.html">Hero Sections</a>
                    <a href="../examples/image-text.html">Image/Text Sections</a>
                    <a href="../examples/text-content-row.html">Text/Content Rows</a>
                    <a href="../examples/layout-grids.html">Layout Grids</a>
                    <a href="../examples/product-row.html">Product Grids</a>
                    <a href="../examples/faq.html">FAQs</a>
                    <a href="../examples/fixed-background.html">Fixed Background Img</a>
                    <a href="../examples/text-card-carousel.html">Text/Carousels</a>
                    <a href="../examples/card-carousel.html">Card Carousel</a>
                    <a href="../examples/accordion-content.html">Accordion/Content</a> 
                    <a href="../examples/optin-form.html">Optin-Form/Text Section</a>
                    <a href="../examples/footer.html">Footer</a> 
                </div>
            </div>
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Components</a>
                <div class="dropdown-content megamenu">
                   <z-container class="narrow-left-sm">
                        <z-row>
                            <z-col class="small">
                                <a href="../examples/accordian.html">Accordian</a>
                                <a href="../examples/alerts.html">Alert Messages</a>
                                <a href="../examples/buttons.html">Buttons</a>
                                <a href="../examples/breadcrumb.html">Breadcrumbs</a>
                                <a href="../examples/cards.html"><i class="zenicon-star down-2"></i> Cards</a>
                                <a href="../examples/cookie-consent.html">Cookie Consent</a>
                                <a href="../examples/corner-popup.html">Corner Popup</a>
                                <!--a href="../examples/dropdown.html">Dropdown</a-->
                                <a href="../examples/exit-intent.html">Exit Popup</a>
                                <a href="../examples/fade.html">Fade</a>
                                <a href="../examples/form-elements.html">Form Elements</a>
                                <a href="../examples/sign-in-form.html">Forms (sign up/opt in)</a>
                                <a href="../examples/responsive-table.html">HTML Table</a>
                            </z-col>
                            <z-col class="small">

                                <a href="../examples/icons.html">Icons</a>
                                <a href="../examples/icon-toggle.html">Icon Toggle</a>
                                <a href="../examples/image-carousel.html">Image Carousel</a>
                                <a href="../examples/image-gallery.html">Image Gallery</a>
                                <a href="../examples/labels.html">Labels</a>
                                <a href="../examples/links.html">Links</a>
                                <a href="../examples/list-group.html">List Groups</a>
                                <a href="../examples/logos.html">Logo Bar</a>
                                <a href="../examples/menus.html">Menus</a>
                                <a href="../examples/modal.html">Modal</a>
                                <a href="../examples/pagination.html">Pagination</a>

                            </z-col>
                            <z-col class="small">
                                <a href="../examples/preloaders.html">Preload/Lazy Load</a>
                                <a href="../examples/pricing-table.html">Pricing Tables</a>
                                <a href="../examples/promo-bars.html">Promo Bars</a>
                                <a href="../examples/quiz.html">Quiz</a>
                                <a href="../examples/sidebars.html">Sidebar</a>
                                <a href="../examples/testimonials.html">Testimonials</a>
                                <a href="../examples/tooltip.html">Tool Tips</a>
                                <a href="../examples/tabs.html">Tabs</a>
                                <a href="../examples/tabbed-interface.html">Tabbed Interface</a>
                                  <a href="../examples/video-player.html">Video Player</a>
                                  <a href="../examples/wizard.html">Wizard/Multi-Step</a>
                            </z-col>
                        </z-row>
                    </z-container>
                </div>
            </div>
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Utilities</a>
                <div class="dropdown-content left-150">
                <a href="../examples/image.html">Image/Icon Styling</a>
                    <a href="../examples/text-formatting-alignment-and-size-classes.html">Text, Alignment, and Size</a>
                    <a href="../examples/padding-margin-utilities.html">Padding & Margin</a>
                    <a href="../examples/animations.html">Animations</a>
                    <a href="../examples/formatting.html">Gap, Height, and Width</a>
                    <a href="../examples/flex.html">Flex</a>
                    <a href="../examples/test-classes.html">Testing Tools</a>
                    <a href="../examples/shadows.html">Shadows</a>                                
                    <a href="../examples/emoji.html">Emoji</a>                                
                    <a href="../examples/border-utilities.html">Border Styling</a>
                    <a href="../examples/misc.html">Misc</a>

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

    function addPrevNextLinks() {
        var links = document.querySelectorAll(".dropdown-content a");
        var currentUrl = window.location.href;
        var pages = Array.from(links).map((a) => a.href);
        var currentIndex = pages.findIndex((url) => url === currentUrl);

        var prevNextHtml = '<z-container-fluid class="prev-next theme-light mt-5">';
        prevNextHtml += '<z-row class="down-5"><z-col class="text-center"><p class="p-0 mb-0">You might also like..</p></z-col></z-row>';
        prevNextHtml += '<z-row class="gap-0">';

        var hasPrev = currentIndex > 0;
        var hasNext = currentIndex < pages.length - 1;

        if (hasPrev) {
            var prevUrl = pages[currentIndex - 1];
            var prevTitle = links[currentIndex - 1].textContent;
            prevNextHtml += `<z-col class="${
                hasNext ? "text-right tablet:text-center" : "text-center"
            } p-0"><a class="btn btn-cta btn-xl text-xs" href="${prevUrl}">Prev: ${prevTitle}</a></z-col>`;
        }

        if (hasNext) {
            var nextUrl = pages[currentIndex + 1];
            var nextTitle = links[currentIndex + 1].textContent;
            prevNextHtml += `<z-col class="${
                hasPrev ? "p-0 tablet:text-center" : "text-center"
            }"><a class="btn btn-cta btn-xl text-xs" href="${nextUrl}">Next: ${nextTitle}</a></z-col>`;
        }

        prevNextHtml += "</z-row></z-container-fluid>";

        var footer = document.querySelector("footer");
        footer.insertAdjacentHTML("beforebegin", prevNextHtml);
    }
});



//---------------------------------
// Skip Navigation tab functionality
//---------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector('#main-content');
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    }
  });
