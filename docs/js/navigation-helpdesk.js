document.addEventListener('DOMContentLoaded', function() {
        var navHtml = `
        <div class="docs-nav">
        <button id="hamburger-button">☰</button>
    </div>
        <nav>
        <button id="close-button">×</button>
        <ul class="pr-2">
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Help Desk</a>
                <div class="dropdown-content">
                <a href="../help-desk/index.html">Getting Started</a>
                <a href="../help-desk/what-is-zencss.html">What is zenCSS?</a>
                <a href="../help-desk/installation.html">Installation</a>
                <a href="../help-desk/core-concepts.html">Core Concepts</a>
                <a href="../help-desk/page-sections.html">Site Sections</a>
                <a href="../help-desk/site-parts.html">Components</a>
                <a href="../help-desk/utilities.html">Utilities</a>
</div></div>

            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Core Concepts</a>
                <div class="dropdown-content">
                    <a href="../examples/smart-align-framework.html">Smart-Align Framework</a>
                    <a href="../examples/smart-color-system.html">Smart-Color System</a>
                    <a href="../examples/smart-text.html">Smart-Text System</a>  
                    <a href="../examples/themes.html">Themes & Modes</a>                      

                    <a href="../examples/test-mode.html">Visual Test Mode</a>
                </div>
            </div>
            
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Site Sections</a>
                <div class="dropdown-content">
                    <a href="../examples/header.html">Header</a>
                    <a href="../examples/jumbotron.html">Hero Section</a>
                    <a href="../examples/optin-form.html">Optin-Form/Text Section</a>
                    <a href="../examples/hero-section.html">Image/Text Section</a>
                    <a href="../examples/layout-grids.html">Layout Grids</a>
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
                                <a href="../examples/cards.html">Cards</a>
                                <a href="../examples/cookie-consent.html">Cookie Consent</a>
                                <a href="../examples/corner-popup.html">Corner Popup</a>
                                <a href="../examples/dropdown.html">Dropdown</a>
                                <a href="../examples/exit-intent.html">Exit Popup</a>
                                <a href="../examples/form-elements.html">Form Elements</a>
                                <a href="../examples/contact-form.html">Form - Sign Up</a>
                                <a href="../examples/sign-in-form.html">Form - Sign In</a>
                            </z-col>
                            <z-col class="small">

                                <a href="../examples/responsive-table.html">HTML Table</a>
                                <a href="../examples/icons.html">Icons</a>
                                <a href="../examples/icon-toggle.html">Icon Toggle</a>
                                <a href="../examples/image.html">Image/Icon Styling</a>
                                <a href="../examples/image-carousel.html">Image Carousel</a>
                                <a href="../examples/image-gallery.html">Image Gallery</a>
                                <a href="../examples/labels.html">Labels</a>
                                <a href="../examples/links.html">Links</a>
                                <a href="../examples/list-group.html">List Groups</a>
                                <a href="../examples/logos.html">Logo Bar</a>
                                <a href="../examples/menus.html">Menus</a>
                                <a href="../examples/modal.html">Modal</a>
                            </z-col>
                            <z-col class="small">
                                <a href="../examples/pagination.html">Pagination</a>
                                <a href="../examples/preloaders.html">Preloaders</a>
                                <a href="../examples/pricing-table.html">Pricing Tables</a>
                                <a href="../examples/promo-bars.html">Promo Bars</a>
                                <a href="../examples/quiz.html">Quiz</a>
                                <a href="../examples/shadows.html">Shadows</a>                                
                                <a href="../examples/testimonials.html">Testimonials</a>
                                <a href="../examples/text.html">Text Formatting</a>
                                <a href="../examples/tooltip.html">Tool Tips</a>
                                <a href="../examples/tabs.html">Tabs/Button Groups</a>
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
                    <a href="../examples/text-formatting-alignment-and-size-classes.html">Text, Alignment, and Size</a>
                    <a href="../examples/padding-margin-utilities.html">Padding & Margin</a>
                    <a href="../examples/animations.html">Animation Utilities</a>
                    <a href="../examples/formatting.html">Gap, Height, and Width</a>
                    <a href="../examples/flex.html">Flex</a>
                    <a href="../examples/test-classes.html">Test Classes</a>
                    <a href="../examples/border-utilities.html">Border Classes</a>
                </div>
            </div>
        </ul>
    </nav>
        `;
    
        var navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = navHtml;
            initializeDropdowns();
            bindHamburgerFunctionality();
        }
    });
    
    function initializeDropdowns() {
        var dropdownLinks = document.querySelectorAll('.dropdown-link');
    
        dropdownLinks.forEach(function(link) {
            var caret = document.createElement('div');
            caret.className = 'caret-up';
            link.parentNode.insertBefore(caret, link.nextSibling);
    
            link.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                var isCurrentDropdownOpen = link.nextElementSibling.nextElementSibling.style.display === "block";
                closeAllDropdowns();
                if (!isCurrentDropdownOpen) {
                    toggleDropdown(link.nextElementSibling.nextElementSibling, caret);
                }
            });
        });
    
        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-link')) {
                closeAllDropdowns();
            }
        };
    }
    
    function toggleDropdown(dropdownContent, caret) {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        caret.style.display = caret.style.display === "block" ? "none" : "block";
    }
    
    function closeAllDropdowns() {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        var carets = document.querySelectorAll('.caret-up');
        dropdowns.forEach(function(dropdown) {
            dropdown.style.display = "none";
        });
        carets.forEach(function(caret) {
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
    