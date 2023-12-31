const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const Webpack = require("webpack");

// Common configuration
const commonConfig = {
    entry: {
        app: [
            "./modules/custom-elements.js",
            "./modules/carousel.js",
            "./modules/dropdown.js",
            "./modules/image-gallery.js",
            "./modules/accordian.js",
            "./modules/misc.js",
            "./modules/dark-mode.js",
            "./modules/lazy-load.js",
            "./modules/background-image.js",
            "./modules/mobile-nav.js",
            "./modules/modal.js",
            "./modules/star-component.js",
            "./modules/exit-intent.js",
            "./modules/wizard.js",
            "./modules/multistep-wizard.js",
            "./modules/tabs.js",
            "./modules/spin.js",
            "./modules/poll.js",
            "./modules/link-scroll.js",
            "./modules/cookie-consent.js",
            "./modules/test-mode.js",
        ],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
    },
    devtool: "source-map", // Generate source maps
};

// Configuration for uncompressed output
const devConfig = {
    ...commonConfig,
    mode: "development",
    output: {
        ...commonConfig.output,
        filename: "zencss.js",
    },
};

// Configuration for minified output
const prodConfig = {
    ...commonConfig,
    mode: "production",
    output: {
        ...commonConfig.output,
        filename: "zencss.min.js",
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};

module.exports = [devConfig, prodConfig];
