/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
var stylesheetApplied = false;
var stylesheetElement = null;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggleStylesheet") {
    if (stylesheetApplied) {
      stylesheetElement.remove();
      stylesheetApplied = false;
    } else {
      stylesheetElement = document.createElement('link');
      stylesheetElement.rel = 'stylesheet';
      stylesheetElement.href = chrome.runtime.getURL('zen-test.css');
      document.head.appendChild(stylesheetElement);
      stylesheetApplied = true;
    }
  }
});
