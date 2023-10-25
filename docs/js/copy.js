
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