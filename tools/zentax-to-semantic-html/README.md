## Installation and Usage

Drag files to the convert-zentax folder and run gulp to convert zentax to semantic HTML. 

Specifically, this gulpfile.js will convert: 

z-container to section class="z-container"
z-row to div class="z-row"
z-col to div class="z-container"

All extra classes will be preserved

Follow these steps to install and use the Zentax to Semantic HTML Gulp script:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Gulp](https://gulpjs.com/) installed globally on your machine. You can install it using the following command:

  `npm install --global gulp-cli`

Install the necessary dependencies:
`npm install`

Place your HTML files in the convert-zentax directory.

Run the Gulp script:
  `gulp`

  This will convert your Zentax markup in the convert-zentax directory to semantic HTML, and the output will be saved in the output directory. The script will continue to run, watching for any changes to the HTML files in the convert-zentax directory and converting them automatically.

Check the output directory for the converted HTML files.

Stop the Gulp script by pressing Ctrl + C in the terminal.

