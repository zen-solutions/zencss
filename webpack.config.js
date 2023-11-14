const path = require('path');

module.exports = {
  entry: {
    app: [
      './js/modules/custom-elements.js',
      './js/modules/test-mode.js',
      './js/modules/opacity-overrides.js',
      './js/modules/dark-mode.js',
      './js/modules/background-image.js',
      './js/modules/mobile-nav.js',
      './js/modules/modal.js',
      './js/modules/star-component.js',
      './js/modules/carousel.js',
      './js/modules/full-screen-card.js',
      './js/modules/accordian.js',
      './js/modules/exit-intent.js',
      './js/modules/wizard.js',
      './js/modules/tabs.js',
      './js/modules/spin.js',
      './js/modules/poll.js',
      './js/modules/misc.js',
      './js/modules/nested-containers.js',
      './js/modules/dropdown.js'
    ]
  },
  output: {
    filename: 'zencss.js',
    path: path.resolve(__dirname, 'js'),
  },
  mode: 'production', // Use 'development' for non-minified output
};
