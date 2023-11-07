const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-z-row"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  // Get all .zen elements
  const zenElements = document.querySelectorAll('.zen');
  
  // Convert NodeList to array and add the body element to the array
  const allElements = Array.from(zenElements);
  allElements.push(document.body);
  
  // Toggle the zen-dark class on all elements in the array
  allElements.forEach(element => {
    element.classList.toggle('zen-dark');
  });
  
  // Update the modeText based on the body's class
  modeText.innerText = body.classList.contains('zen-dark') ? "Light mode" : "Dark mode";
});



  // Select all elements with the copy-text class
  var preElements = document.querySelectorAll('pre.copy-text');

  // Loop through each matching <pre> element
  preElements.forEach(function(textBox) {
    var copyButton = document.createElement('button');
    var copyText = textBox.innerText;
  
    // Insert copy button into <pre>
    textBox.appendChild(copyButton);
  
    // Copy text to clipboard on button click
    copyButton.addEventListener('click', function(event) {
      navigator.clipboard.writeText(copyText)
        .then(() => {
          // Animate button to acknowledge copy
          copyButton.style.cssText = 'background-color: green !important; background-image: url("images/ui/copied.png") !important;';
          setTimeout(function unCopy() {
            copyButton.style.cssText = 'background-color: #ccc !important; background-image: url("images/ui/copy.png") !important;';
          }, 2500);
        })
        .catch(err => {
          // If user is denied clipboard permissions
          alert('Not enough permissions to copy text');
        });
    });
  });

  //mobile menu stuff
  document.addEventListener("DOMContentLoaded", function() {
    let menuLinks = document.querySelectorAll("#menu a");
    let checkbox = document.querySelector("#menuToggle input[type='checkbox']");

    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            checkbox.checked = false;
        });
    });
});


//mobile correction for nav bar
document.addEventListener("DOMContentLoaded", function() {
  // Get all the anchor tags
  const anchors = document.querySelectorAll("a[href^='#']");
  
  anchors.forEach(anchor => {
      anchor.addEventListener("click", function(event) {
          // Prevent default behavior
          event.preventDefault();

          // Get  target element
          const targetId = anchor.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              // Calculate scroll position
              let yPos = targetElement.getBoundingClientRect().top + window.pageYOffset;

              // Offset by the nav height on mobile
              if (window.innerWidth <= 768) { 
                  yPos -= 125; // height of top nav
              }

              window.scrollTo({ top: yPos, behavior: 'smooth' });
          }
      });
  });
});


