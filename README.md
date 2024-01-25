# zencss

An open-source, website authoring and design toolkit that helps you build, style, and debug websites. Current Release is v2.4.0-beta

### Pre-Launch Installation

-   Download the latest release or clone the latest files [from the zencss repository](https://github.com/zen-solutions/zencss).
-   Follow the instructions in the [zenCSS setup documentation](https://zencss.com/docs/help-desk/installation.html).

## Features

-   Smart-Align Framework
-   Smart-Color System
-   Smart-Text System
-   7 color themes - customize for any brand
-   Shorthand HTML syntax - write less code
-   Utility Toolkit
-   CSS Test mode
-   Design Library + components

### Dependencies

For the core framework, none - just pure CSS and Vanilla JavaScript. If you want to work with our SASS files or JavaScript modules, there are a few dependencies. We provide [instructions for that here](https://zencss.com/docs/help-desk/installation-source.html).

### Best Practices for Customization

When working with zenCSS, we recommend using override files instead of directly modifying the core files. This approach ensures that your customizations are preserved when updating to newer versions of zenCSS.

1. **For CSS:** Create separate CSS files for your custom styles and link them after the core zenCSS files in your HTML. This will allow your styles to take precedence.

2. **For JavaScript:** If you need to extend or modify the JavaScript functionality, create separate JS modules and import the core zenCSS modules as dependencies. This way, you can enhance or override specific functionalities without altering the original source.

# Contributing

Help us make zenCSS better for everyone, any contribution will be considered. Use the issue tracker for bug reports, features requests and submitting pull requests.

# Bug Reports

Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help us fix any potential bugs. Please reproduce any issues [here](https://codepen.io/ScrmSe4L6/pen/ExrQRdE) and include with your bug report.

# Feature Requests

Before opening a feature request, please take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

# Pull Requests

Please ask first before embarking on any significant pull request (e.g. implementing features, re-factoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project. When contributing code to this project always ask yourself these questions.

Is it essential? Will it add value? Is this change necessary?
