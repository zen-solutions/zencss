/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2024 Shaun Mackey
  * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
  */
 

  //-------------------------------------
  // Dynamic year in footer
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      const currentYear = new Date().getFullYear();
      yearSpan.textContent = currentYear;
    }
  });
  
  //-------------------------------------
  // icon toggle
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    var iconToggles = document.querySelectorAll('.icon-toggle');

    iconToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function () {
            var iconOff = this.querySelector('.icon-off');
            var iconOn = this.querySelector('.icon-on');

            // Toggle the 'show' class
            iconOff.classList.toggle('show');
            iconOn.classList.toggle('show');
        });
    });
});



// New stuff here after modules were created. If we need to revert, include this stuff. 
document.querySelectorAll('.accordion-toggle').forEach(item => {
  item.addEventListener('click', event => {
      event.preventDefault();

      const contentId = item.getAttribute('aria-controls');
      const content = document.getElementById(contentId);

      // Close other expanded contents
      document.querySelectorAll('.expanded-content').forEach(el => {
          if (el.id !== contentId) {
              el.classList.remove('show');
              el.style.overflowY = 'hidden';
          }
      });

      // Toggle current content
      content.classList.toggle('show');

      setTimeout(() => {
          if (content.scrollHeight > content.clientHeight) {
              content.style.overflowY = 'auto';
          } else {
              content.style.overflowY = 'hidden';
          }
      }, 500); // Match this with your CSS transition duration
  });
});


  //-------------------------------------
  // Corner Popup
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.corner-popup-button');
    var popup = document.querySelector('.corner-popup-window');

    if (button && popup) {
        button.addEventListener('click', function() {
            popup.classList.toggle('hidden');
            console.log("Button clicked");
        });
    }
});

  //-------------------------------------
  // Responsive Table
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    // Function to apply data labels to a table
    function applyDataLabelsToTable(table) {
        // Get all the headers from the direct child thead of the table
        const headers = Array.from(table.querySelectorAll(':scope > thead > tr > th')).map(th => th.textContent.trim());

        // Iterate over each row in the direct child tbody of the table
        table.querySelectorAll(':scope > tbody > tr').forEach(row => {
            // Get all cells (td) in this row
            row.querySelectorAll(':scope > td').forEach((cell, index) => {
                // Assign the corresponding header text to the data-label attribute of the cell
                if (headers[index]) {
                    cell.setAttribute('data-label', headers[index]);
                }
            });
        });
    }

    // Select all tables with class 'responsive-table' and apply data labels to each
    document.querySelectorAll('.responsive-table').forEach(applyDataLabelsToTable);
});

  //-------------------------------------
  // Lazy Load Test - WIP
  //-------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const lazyLoadImages = document.querySelectorAll("img.lazy-load");
  
    if (lazyLoadImages.length > 0) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy-load");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyLoadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    }
  });
  
   //-------------------------------------
  // Tabbed Card
  //-------------------------------------

  // JavaScript function to show/hide tab content
  function showTab(tabNumber) {
    const tabbedCard = document.querySelector('.tabbed-card');
    if (tabbedCard) {
        const tabs = tabbedCard.querySelectorAll('.tab');
        const tabContents = tabbedCard.querySelectorAll('.tab-content');
        
        tabs.forEach((tab, index) => {
            if (index + 1 === tabNumber) {
                tab.classList.add('active');
                tabContents[index].classList.add('active');
            } else {
                tab.classList.remove('active');
                tabContents[index].classList.remove('active');
            }
        });
    }
}

// Attach click event listeners to tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', function() {
            const tabNumber = parseInt(tab.getAttribute('data-tab'));
            showTab(tabNumber);
        });
    });
});



  //-------------------------------------
  // side menus
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function() {
    // Select all the menu items
    const menuItems = document.querySelectorAll('.nav-menu li');
  
    // Only proceed if menu items exist
    if (menuItems.length) {
      menuItems.forEach(item => {
        // Add click event listener to each menu item
        item.addEventListener('click', function() {
          // Remove the 'active' class from all items
          menuItems.forEach(i => i.classList.remove('active'));
  
          // Add the 'active' class to the clicked item
          this.classList.add('active');
        });
      });
    }
  });
  

  //pie charts
  document.addEventListener('DOMContentLoaded', () => {
    const chart = document.querySelector('.zen-pie-chart');
    let accumulatedRotation = 0;

    document.querySelectorAll('.zen-pie-chart .zen-slice').forEach(slice => {
        const percentage = parseFloat(slice.dataset.percentage);
        const rotation = 360 * (percentage / 100);
        const sliceRotation = accumulatedRotation + rotation / 2;

        // Set styles and classes for the slice
        slice.style.transform = `rotate(${sliceRotation}deg)`;
        slice.style.clip = `rect(0px, ${chart.clientWidth}px, ${chart.clientWidth}px, ${chart.clientWidth / 2}px)`;
        slice.style.backgroundColor = getComputedStyle(slice).backgroundColor;
        slice.style.opacity = '1';

        // For more than 50%, create an overlay slice to simulate the additional percentage
        if (percentage > 50) {
            let overlaySlice = document.createElement('div');
            overlaySlice.classList.add('zen-slice', 'overlay');
            overlaySlice.style.backgroundColor = slice.style.backgroundColor;
            overlaySlice.style.position = 'absolute';
            overlaySlice.style.width = '100%';
            overlaySlice.style.height = '100%';
            overlaySlice.style.transform = `rotate(${sliceRotation + 180}deg)`;
            overlaySlice.style.clip = `rect(0px, ${chart.clientWidth}px, ${chart.clientWidth}px, ${chart.clientWidth / 2}px)`;
            chart.appendChild(overlaySlice);
        }

        accumulatedRotation += rotation;
    });
});


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