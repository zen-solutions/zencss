/*
 * zenCSS Beta v2.0.0 (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

const path = require("path");

module.exports = {
    entry: {
        app: [
            "/modules/custom-elements.js",
           // "/modules/nested-containers.js", //depricated
            "/modules/carousel.js",
            "/modules/dropdown.js",
            "/modules/image-gallery.js",
            "/modules/accordian.js",
            "/modules/misc.js",
            "/modules/opacity-overrides.js",
            "/modules/dark-mode.js",
            "/modules/background-image.js",
            "/modules/mobile-nav.js",
            "/modules/modal.js",
            "/modules/star-component.js",
            "/modules/full-screen-card.js",
            "/modules/exit-intent.js",
            "/modules/wizard.js",
            "/modules/multistep-wizard.js",
            "/modules/tabs.js",
            "/modules/spin.js",
            "/modules/poll.js",
            "/modules/link-scroll.js",
            "/modules/cookie-consent.js",
            "/modules/test-mode.js",
        ],
    },
    output: {
        filename: "zencss.js",
        path: path.resolve(__dirname, "../js"),
    },
    mode: "production", // Use 'development' for non-minified output

    devtool: false
};
