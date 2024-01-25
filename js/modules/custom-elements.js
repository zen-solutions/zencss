/*
 * zenCSS v2.4.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

// ----------------------------------------
// Define zenCSS elements for use in JS
// ----------------------------------------

// Define z-container custom element
class ZContainer extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("z-container", ZContainer);

// Define z-row custom element
class ZRow extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("z-row", ZRow);

// Define z-col custom element
class ZCol extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("z-col", ZCol);
