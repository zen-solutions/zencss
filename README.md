# zencss

An open-source, website authoring and design toolkit that helps you build, style, and debug websites. Currently Beta v2.0.0 

### Installation

- Download or clone the files [from the zencss repository](https://github.com/zencss/zencss).
- Follow the instructions in the [zenCSS setup documentation](https://zencss.com/docs/index.html#setup).


## Features

- Website Framework
- Design System 
- 6 color themes - customize for any brand
- Shorthand HTML syntax - write less code
- Utility Toolkit 
- CSS Test mode
- Design Library + components
- Typography design system 

### Dependencies

None. Just pure CSS and Vanilla JavaScript. If you want to work with our SASS files or JavaScript modules, we provide guidance for that.

### Best Practices for Customization

When working with zenCSS, we recommend using override files instead of directly modifying the core files. This approach ensures that your customizations are preserved when updating to newer versions of zenCSS.

1. **For CSS:** Create separate CSS files for your custom styles and link them after the core zenCSS files in your HTML. This will allow your styles to take precedence.

2. **For JavaScript:** If you need to extend or modify the JavaScript functionality, create separate JS modules and import the core zenCSS modules as dependencies. This way, you can enhance or override specific functionalities without altering the original source.

