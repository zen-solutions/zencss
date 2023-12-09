const path = require('path');

module.exports = {
  entry: {
    app: [
      '/modules/custom-elements.js',
      '/modules/nested-containers.js',
      '/modules/carousel.js',
      '/modules/dropdown.js',
      '/optional/image-gallery.js',
      '/modules/accordian.js',
      '/modules/misc.js',
      '/modules/opacity-overrides.js',
      '/modules/dark-mode.js',
      '/modules/background-image.js',
      '/modules/mobile-nav.js',
      '/modules/modal.js',
      '/modules/star-component.js',
      '/modules/full-screen-card.js',
      '/modules/exit-intent.js',
      '/modules/wizard.js',
      '/modules/tabs.js',
      '/modules/spin.js',
      '/modules/poll.js',
      '/optional/cookie-consent.js',
      '/modules/test-mode.js'  
    ]
  },
  output: {
    filename: 'zencss.js',
    path: path.resolve(__dirname, '../js'),
  },
  mode: 'development', // Use 'development' for non-minified outp ut
};
