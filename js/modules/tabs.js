/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 

// ----------------------------------------
// Tabs
// ----------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-nav .item');

  if(tabs.length > 0) {
      function removeCurrentClass() {
          tabs.forEach(tab => {
              tab.classList.remove('current');
          });
      }

      function setCurrentClass(event) {
          event.preventDefault();
          removeCurrentClass();
          event.target.classList.add('current');
      }

      tabs.forEach(tab => {
          tab.addEventListener('click', setCurrentClass);
      });
  }
});
