/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2024 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */


  //-------------------------------------
  // Nested containers - kill parent padding + if i am a row, and im inide a container that i neted in a column, then i need to have my martin top and bottom set to 0
  //-------------------------------------

// -------------------------------------------------------------
//THIS VERSION APPEARS TO WORK FOR BOTH/MIXED. SAVING
// -------------------------------------------------------------

  document.addEventListener('DOMContentLoaded', function () {
    // Function to apply zero padding to column parents of containers
    function applyPaddingToColParents() {
        var containerSelectors = ['z-container', 'div.z-container'];
        containerSelectors.forEach(function (selector) {
            var containers = document.querySelectorAll(selector);
            containers.forEach(function (container) {
                var col = container.parentElement;
                // Check if the parent is a z-col or div.z-col
                if (col.matches('z-col, div.z-col')) {
                    col.style.padding = '0';
                }
            });
        });
    }

    // Function to apply zero padding to rows
    function applyPaddingToRows() {
        var rowSelectors = ['z-row', 'div.z-row'];
        rowSelectors.forEach(function (selector) {
            var rows = document.querySelectorAll(selector);
            rows.forEach(function (row) {
                var container = row.closest('z-col > z-container, div.z-col > div.z-container, z-col > div.z-container, div.z-col > z-container');
                if (container) {
                    row.style.paddingTop = '0';
                    row.style.paddingBottom = '0';
                }
            });
        });
    }

    // Apply styles
    applyPaddingToColParents();
    applyPaddingToRows();
});




//   // -------------------------------------------------------------
//   // THIS VERSION WORKS FOR THE ZENTAX IMPLEMENTATION
//   // -------------------------------------------------------------

//   document.addEventListener('DOMContentLoaded', function () {
//     // Handle the padding for <z-col> elements that directly contain <z-container>
//     var cols = document.querySelectorAll('z-col > z-container');

//     cols.forEach(function (container) {
//         // The parent of <z-container> is <z-col>
//         var col = container.parentElement;
//         col.style.padding = '0';
//     });

//     // Handle the margin for <z-row> elements within <z-container> inside <z-col>
//     var rows = document.querySelectorAll('z-row');
//     rows.forEach(function (row) {
//         // Use closest to check if <z-row> is a direct child of <z-container> inside <z-col>
//         var container = row.closest('z-col > z-container');
//         if (container) {
//             // Set the top and bottom padding of <z-row> to 0
//             row.style.paddingTop = '0';
//             row.style.paddingBottom = '0';
//         }
//     });
// });

// -------------------------------------------------------------
//THIS VERSION WORKS FOR THE DIV IMPLEMENTATION
// -------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     // Select both custom elements and divs with corresponding classes
//     var colSelector = 'z-col, div.z-col';
//     var containerSelector = 'z-container, div.z-container';
//     var rowSelector = 'z-row, div.z-row';

//     // Handle the padding for <z-col> elements or divs with class 'z-col' that directly contain <z-container> or div with class 'z-container'
//     var cols = document.querySelectorAll(colSelector + ' > ' + containerSelector);

//     cols.forEach(function (container) {
//         var col = container.parentElement; // Parent is <z-col> or div with class 'z-col'
//         col.style.padding = '0';
//         console.log("Padding adjusted for z-col");
//     });

//     // Handle the margin for <z-row> elements or divs with class 'z-row' within <z-container> or div with class 'z-container' inside <z-col> or div with class 'z-col'
//     var rows = document.querySelectorAll(rowSelector);
//     rows.forEach(function (row) {
//         var container = row.closest(containerSelector + ' > ' + colSelector);
//         if (container) {
//             row.style.paddingTop = '0';
//             row.style.paddingBottom = '0';
//         }
//     });
// });








//---------- END














//below is old and prolly working but ignoring it for now
//   document.addEventListener('DOMContentLoaded', function () {
//     // Select both custom elements and divs with corresponding classes
//     var colSelector = 'z-col, div.z-col';
//     var containerSelector = 'z-container, div.z-container';
//     var rowSelector = 'z-row, div.z-row';

//     // Handle the padding for <z-col> elements or divs with class 'z-col' that directly contain <z-container> or div with class 'z-container'
//     var cols = document.querySelectorAll(colSelector + ' > ' + containerSelector);

//     cols.forEach(function (container) {
//         var col = container.parentElement; // Parent is <z-col> or div with class 'z-col'
//         col.style.padding = '0';
//         console.log("Padding adjusted for z-col");
//     });

//     // Handle the margin for <z-row> elements or divs with class 'z-row' within <z-container> or div with class 'z-container' inside <z-col> or div with class 'z-col'
//     var rows = document.querySelectorAll(rowSelector);
//     rows.forEach(function (row) {
//         var container = row.closest(containerSelector + ' > ' + colSelector);
//         if (container) {
//             row.style.paddingTop = '0';
//             row.style.paddingBottom = '0';
//         }
//     });
// });







  //   document.addEventListener('DOMContentLoaded', function () {
//     // Handle the padding for <z-col> elements
//     var cols = document.querySelectorAll('z-col');

//     cols.forEach(function (col) {
//         if (col.querySelector('z-container')) {
//             col.style.padding = '0';
//             console.log("im the culprit");
//         }
//     });

//     // Handle the margin for <z-row> elements within <z-container> inside <z-col>
//     var rows = document.querySelectorAll('z-row');
//     rows.forEach(function (row) {
//         // Use closest to check if <z-row> is inside <z-container> and that <z-container> is inside <z-col>
//         var container = row.closest('z-container');
//         if (container && container.parentElement.tagName.toLowerCase() === 'z-col') {
//             // Set the top and bottom padding of <z-row> to 0
//             row.style.paddingTop = '0';
//             row.style.paddingBottom = '0';
//         }
//     });
// }); 
