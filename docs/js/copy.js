/*
 * zenCSS v2.0.2-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

var preElements = document.querySelectorAll("pre.copy-text");

preElements.forEach(function (textBox) {
    var copyButton = document.createElement("button");
    var copyText = textBox.innerText;

    var srOnlySpan = document.createElement("span");
    srOnlySpan.textContent = "Copy Text"; // Include your desired text here
    srOnlySpan.style.cssText = "position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px);";
    copyButton.appendChild(srOnlySpan);

    copyButton.setAttribute("data-tooltip", "Copy to clipboard");
    copyButton.setAttribute("data-placement", "left");

    textBox.appendChild(copyButton);

    copyButton.addEventListener("click", function (event) {
        navigator.clipboard
            .writeText(copyText)
            .then(() => {
                // Change tooltip to 'Copied'
                copyButton.setAttribute("data-tooltip", "Copied");

                copyButton.style.cssText = 'background-color: #343434 !important; background-image: url("../images/ui/copied.png") !important;';
                setTimeout(function unCopy() {
                    copyButton.style.cssText = 'background-color: #ccc !important; background-image: url("../images/ui/copy.png") !important;';

                    // Reset the tooltip text
                    copyButton.setAttribute("data-tooltip", "Copy to clipboard");
                }, 1500);
            })
            .catch((err) => {
                alert("Not enough permissions to copy text");
            });
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
    //=const hamburgerButton2 = document.getElementById("hamburger-button-2");
    const closeButton = document.getElementById("close-button");
    const nav = document.querySelector(".top-nav");

    const toggleMenu = () => {
        nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
    };

    // if (hamburgerButton2 && closeButton && nav) {
    //    // hamburgerButton.addEventListener("click", toggleMenu);
    //     closeButton.addEventListener("click", toggleMenu);

    //     navLinks.forEach((link) => {
    //         link.addEventListener("click", toggleMenu);
    //     });
    // }
});

//add remove on framework page
document.addEventListener("DOMContentLoaded", function () {
    var addColBtn = document.getElementById("addCol");
    var removeColBtn = document.getElementById("removeCol");
    var row = document.querySelector(".add-remove");

    // Function to update the numbering of z-col elements
    function updateZColNumbers() {
        if (row) {
            var zCols = row.querySelectorAll("z-col");
            zCols.forEach(function (zCol, index) {
                zCol.textContent = "column " + (index + 1);
            });
        }
    }

    if (addColBtn) {
        addColBtn.addEventListener("click", function () {
            if (row) {
                var newCol = document.createElement("z-col");
                newCol.className = "center card theme-light";
                row.appendChild(newCol);
                updateZColNumbers(); // Update numbers after adding a column
            }
        });
    }

    if (removeColBtn) {
        removeColBtn.addEventListener("click", function () {
            if (row && row.children.length > 0) {
                row.removeChild(row.lastElementChild);
                updateZColNumbers(); // Update numbers after removing a column
            }
        });
    }

    // Initial numbering update for existing z-cols
    updateZColNumbers();
});
