/*
 * zenCSS v2.1.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

function updateSEO() {
    const h1Element = document.querySelector("h1");
    let descriptionContent;

    // Check if there's an element with class 'lead'
    const leadElement = document.querySelector(".lead");
    if (leadElement) {
        descriptionContent = leadElement.textContent;
    } else if (h1Element) {
        // If no 'lead' class, use the first <p> element after the <h1>
        const nextPElement = h1Element.nextElementSibling;
        if (nextPElement && nextPElement.tagName.toLowerCase() === "p") {
            descriptionContent = nextPElement.textContent;
        }
    }

    // Normalize spaces in descriptionContent
    if (descriptionContent) {
        descriptionContent = descriptionContent.trim().replace(/\s+/g, ' ');
    }

    // Update the title tag to "zenCSS - [h1 content]"
    if (h1Element) {
        document.title = `zenCSS - ${h1Element.textContent.trim()}`;
    }

    // Update the meta description
    if (descriptionContent) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", descriptionContent);
        } else {
            // Create a new meta description tag if it doesn't exist
            const newMetaDescription = document.createElement("meta");
            newMetaDescription.setAttribute("name", "description");
            newMetaDescription.setAttribute("content", descriptionContent);
            document.head.appendChild(newMetaDescription);
        }
    }
}

document.addEventListener("DOMContentLoaded", updateSEO);
