# zencss

An open-source, website authoring and design toolkit that helps you build, style, and debug websites.

Download or clone this repo and use the CSS/JS for the latest functionality. 

Current Version: Beta-RC1

## Features

- Website Framework
- Design System 
- 6 color themes - customize for any brand
- Shorthand HTML syntax - write less code
- Utility Toolkit 
- CSS Test mode
- Design Library + components
- Typography design system (with resolution-based, auto-resizing)

### Dependencies

None. Just pure CSS and Vanilla JavaScript. If you want to work with our SASS files or JavaScript modules, read on.

### Best Practices for Customization

When working with zenCSS, we recommend using override files instead of directly modifying the core files. This approach ensures that your customizations are preserved when updating to newer versions of zenCSS.

1. **For CSS:** Create separate CSS files for your custom styles and link them after the core zenCSS files in your HTML. This will allow your styles to take precedence.

2. **For JavaScript:** If you need to extend or modify the JavaScript functionality, create separate JS modules and import the core zenCSS modules as dependencies. This way, you can enhance or override specific functionalities without altering the original source.

### Installation

- Download or clone the files [from the zencss repository](https://github.com/zencss/zencss).
- Follow the instructions in the [zenCSS setup documentation](https://zencss.com/docs/index.html#setup).

#### Installing SASS via NPM

- **Prerequisite:** Ensure you have Node.js installed on your computer. If not, download and install it from the [official website](https://nodejs.org/).
- **Installation:** Open your terminal or command prompt and run the following command:
  
    `npm install -g sass`

Then CD to the scss folder

# For compressed CSS

`sass --style compressed zen.scss ../css/zen.css`


# For uncompressed CSS

`sass --style expanded zen.scss ../css/zen.css`

# Webpack Setup Guide for JavaScript modules

## Introduction
This guide outlines the steps to set up Webpack for bundling JavaScript modules in the zenCSS project.

## Prerequisites
- Node.js installed on your system
- npm (Node Package Manager), typically bundled with Node.js

## Installation and Configuration

### Step 1: Install Webpack and Webpack CLI
Install Webpack and the Webpack CLI as development dependencies in your project.

`npm install webpack webpack-cli --save-dev`


#### Step 2: Configure `webpack.config.js`
When configuring your `webpack.config.js`, set up separate entry points for the zenCSS core modules and your custom modules. 

This approach allows you to keep the original source intact and manage your custom scripts separately. Here's an updated example configuration:

javascript
`const path = require('path');

module.exports = {
  entry: {
    zenCore: ['./js/modules/core-module1.js', './js/modules/core-module2.js'], // Core zenCSS modules
    custom: ['./js/custom/custom-module1.js', './js/custom/custom-module2.js'] // Your custom modules
  },
  output: {
    filename: '[name].bundle.js', // This will create separate bundles for core and custom modules
    path: path.resolve(__dirname, 'dist/js'),
  },
  mode: 'development' // Change to 'production' for minified output
};`

## To run: 
` npx webpack`