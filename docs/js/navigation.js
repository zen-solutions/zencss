
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
                    <a href="../help-desk/what-is-zencss.html">What is zenCSS?</a>
    
    <a href="../help-desk/index.html">Getting Started</a>
    <a href="../help-desk/installation.html">Installation</a>
    <a href="../help-desk/core-concepts.html">Core Concepts</a>
    <a href="../help-desk/page-sections.html">Site Sections</a>
    <a href="../help-desk/site-parts.html">Components</a>
    <a href="../help-desk/utilities.html">Utilities</a>
    </div></div>
    
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Core Concepts</a>
                <div class="dropdown-content">
                    <a href="smart-align-framework.html">Smart-Align Framework</a>
                    <a href="smart-color-system.html">Smart-Color System</a>
                    <a href="smart-text.html">Smart-Text System</a>  
                    <a href="themes.html">Modes & Themes</a>
                    <a href="zen-system.html">The ZEN Ideology</a>                      
                    <a href="zentax.html">Intro to Zentax</a>                      
                </div>
            </div>
            
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Site Sections</a>
                <div class="dropdown-content">
                    <a href="header.html">Header</a>
                    <a href="jumbotron.html">Hero Sections</a>
                   <a href="image-text.html">Image/Text Sections</a>
                    <a href="optin-form.html">Optin-Form/Text Section</a>
                    <a href="layout-grids.html">Layout Grids</a>
                    <a href="footer.html">Footer</a>
                </div>
            </div>
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Components</a>
                <div class="dropdown-content megamenu">
                    <z-container class="narrow-left-sm">
                        <z-row>
                            <z-col class="small">
                                <a href="toggle.html">Accordian</a>
                                <a href="alerts.html">Alert Messages</a>
                                <a href="buttons.html">Buttons</a>
                                <a href="breadcrumb.html">Breadcrumbs</a>
                                <a href="cards.html">Cards</a>
                                <a href="cookie-consent.html">Cookie Consent</a>
                                <a href="corner-popup.html">Corner Popup</a>
                                <a href="dropdown.html">Dropdown</a>
                                <a href="exit-intent.html">Exit Popup</a>
                                <a href="form-elements.html">Form Elements</a>
                            </z-col>
                            <z-col class="small">
                                <a href="contact-form.html">Form - Sign Up</a>
                                <a href="sign-in-form.html">Form - Sign In</a>
                                <a href="responsive-table.html">HTML Table</a>
                                <a href="icons.html">Icons</a>
                                <a href="icon.html">Icon Container</a>
                                <a href="image.html">Image Styling</a>
                                <a href="image-carousel.html">Image Carousel</a>
                                <a href="image-gallery.html">Image Gallery</a>
                                <a href="list-group.html">List Groups</a>
                                <a href="logos.html">Logo Bar</a>
                            </z-col>
                            <z-col class="small">
                                <a href="modal.html">Modal</a>
                                <a href="pagination.html">Pagination</a>
                                <a href="pricing-table.html">Pricing Tables</a>
                                <a href="quiz.html">Quiz</a>
                                <a href="decorations.html">Site Extras</a>                                    
                                <a href="testimonials.html">Testimonials</a>
                                <a href="tooltip.html">Tool Tips</a>
                                <a href="tabs.html">Tabs</a>
                                <a href="video-player.html">Video Player</a>
                                <a href="wizard.html">Wizard/Multi-Step</a>
                            </z-col>
                        </z-row>
                    </z-container>
                </div>
            </div>
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Utilities</a>
                <div class="dropdown-content left-150">
                    <a href="text-formatting-alignment-and-size-classes.html">Text, Alignment, and Size</a>
                    <a href="padding-margin-utilities.html">Padding & Margin</a>
                    <a href="animations.html">Animation Utilities</a>
                    <a href="formatting.html">Gap, Height, and Width</a>
                    <a href="flex.html">Flex</a>
                    <a href="test-classes.html">Test Classes</a>
                    <a href="border-utilities.html">Border Classes</a>
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
    