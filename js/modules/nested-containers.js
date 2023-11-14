
  //-------------------------------------
  // Nested containers - kill parent padding
  // BUG: Adding this functionality breaks convention with support for zentax and semantic. fix for semantic.
  //-------------------------------------
//   document.addEventListener('DOMContentLoaded', function () {
//     var columns = document.querySelectorAll('z-col');

//     columns.forEach(function (column) {
//         if (column.querySelector('z-container')) {
//             column.style.padding = '0';
//         }
//     });
// });

  //-------------------------------------
  // Nested containers - kill parent padding + if i am a row, and im inide a container that i neted in a column, then i need to have my martin top and bottom set to 0
  // BUG: Adding this functionality breaks convention with support for zentax and semantic. fix for semantic.
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    // Handle the padding for <z-col> elements
    var cols = document.querySelectorAll('z-col');

    cols.forEach(function (col) {
        if (col.querySelector('z-container')) {
            col.style.padding = '0';
        }
    });

    // Handle the margin for <z-row> elements within <z-container> inside <z-col>
    var rows = document.querySelectorAll('z-row');

    rows.forEach(function (row) {
        // Use closest to check if <z-row> is inside <z-container> and that <z-container> is inside <z-col>
        var container = row.closest('z-container');
        if (container && container.parentElement.tagName.toLowerCase() === 'z-col') {
            // Set the top and bottom padding of <z-row> to 0
            row.style.paddingTop = '0';
            row.style.paddingBottom = '0';
            console.log("There are no mistakes, only happy accidents. ");
        }
    });
});
