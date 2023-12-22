document.addEventListener('DOMContentLoaded', function() {
        var navHtml = `
        <div class="docs-nav">
        <a id="hamburger-button"><img src="../../img/icons/bars.svg" class="icon-header" alt="Menu"></a>
        </div>
        <nav class="top-nav">
        <button id="close-button"><a class="close"></a></button>
        <ul class="pr-2">
            <div class="dropdown nav-dropdown">
                <a href="#" class="dropdown-link">Help Desk</a>
                <div class="dropdown-content">
                <a href="../help-desk/index.html">Quick-Start Guide</a>
                <a href="../help-desk/what-is-zencss.html">What is zenCSS?</a>
                <a href="../help-desk/installation.html">Installation</a>
                <a href="../help-desk/features.html">Features</a>
                <a href="../examples/zen-system.html">The ZEN Ideology</a>                      
                <a href="../examples/zentax.html">Intro to Zentax</a>     
                <a href="../examples/about.html">About</a>     

</div></div>

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
                    <a href="../examples/text-content-row.html">Text/Content Row</a>
                    <a href="../examples/layout-grids.html">Layout Grids</a>
                    <a href="../examples/product-row.html">Product Grids</a>
                    <a href="../examples/faq.html">FAQs</a>
                    <a href="../examples/text-card-carousel.html">Text/Carousels</a>
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
                                <a href="../examples/cards.html">Cards</a>
                                <a href="../examples/cookie-consent.html">Cookie Consent</a>
                                <a href="../examples/corner-popup.html">Corner Popup</a>
                                <!--a href="../examples/dropdown.html">Dropdown</a-->
                                <a href="../examples/exit-intent.html">Exit Popup</a>
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
                                <a href="../examples/preloaders.html">Preloaders</a>
                                <a href="../examples/pricing-table.html">Pricing Tables</a>
                                <a href="../examples/promo-bars.html">Promo Bars</a>
                                <a href="../examples/quiz.html">Quiz</a>
                                <a href="../examples/sidebars.html">Side Bars</a>
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
                <a href="../examples/text.html">Text Treatments</a>
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
    