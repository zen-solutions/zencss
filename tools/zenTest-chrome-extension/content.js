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
