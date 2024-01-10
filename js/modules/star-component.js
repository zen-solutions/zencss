/*
 * zenCSS v2.2.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

// ----------------------------------------
// Star component
// ----------------------------------------
class StarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    static get observedAttributes() {
        return ["stars", "half"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const starCount = parseInt(this.getAttribute("stars")) || 1;
        const half = this.getAttribute("half") === "true";
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < starCount; i++) {
            const starImg = document.createElement("img");
            starImg.src = "../../dist/img/icons/alerts/star-solid.svg";
            starImg.alt = "";
            starImg.className = "icon icon-gold";
            fragment.appendChild(starImg);
        }

        if (half && starCount < 5) {
            const halfStarImg = document.createElement("img");
            halfStarImg.src = "../../dist/img/icons/alerts/star-half-stroke-regular.svg";
            halfStarImg.alt = "";
            halfStarImg.className = "icon icon-gold";
            fragment.appendChild(halfStarImg);
        }

        this.shadowRoot.innerHTML = `
          <style>
              .icon {
                  width: 24px;
                  height: 24px;
              }
      .icon-gold{
        width: 9px;
        
        filter: invert(85%) sepia(36%) saturate(2389%) hue-rotate(345deg) brightness(96%) contrast(97%);
        }
        
        .icon-silver{
        width: 9px;
        filter: invert(50%) sepia(8%) saturate(15%) hue-rotate(314deg) brightness(103%) contrast(84%);
        }
          </style>
      `;
        this.shadowRoot.appendChild(fragment);
    }
}

customElements.define("star-component", StarComponent);
