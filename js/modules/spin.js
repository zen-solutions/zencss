/*
  * zenCSS v1.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 
//-------------------------------------
//Spin
  //-------------------------------------

// This function will apply the spinning effect to the spinner if it exists
function startSpinning() {
  // Select the spinner element
  var spinner = document.querySelector('.rotate-spinner');
  
  // Check if the spinner exists to avoid errors
  if (spinner) {
    // Apply the CSS animation using inline styles
    spinner.style.animation = 'spin 2s linear infinite';
  }
}

// This function will start the spinning when the document is loaded, if the spinner exists
document.addEventListener('DOMContentLoaded', startSpinning);


