const path = require('path');

module.exports = {
  entry: {
    app: [
      '/modules/custom-elements.js',
      '/modules/test-mode.js',
      '/modules/opacity-overrides.js',
      '/modules/dark-mode.js',
      '/modules/background-image.js',
      '/modules/mobile-nav.js',
      '/modules/modal.js',
      '/modules/star-component.js',
      '/modules/carousel.js',
      '/modules/full-screen-card.js',
      '/modules/accordian.js',
      '/modules/exit-intent.js',
      '/modules/wizard.js',
      '/modules/tabs.js',
      '/modules/spin.js',
      '/modules/poll.js',
      '/modules/misc.js',
      '/modules/nested-containers.js',
      '/optional/cookie-consent.js',
      '/optional/image-gallery.js',
      '/modules/dropdown.js'
    ]
  },
  output: {
    filename: 'zencss.js',
    path: path.resolve(__dirname, '../js'),
  },
  mode: 'production', // Use 'development' for non-minified output
};
