'use strict';

module.exports = {
  bundle: {
    main: {
      scripts:[
        './source/bower_components/modernizr/modernizr.js',
        './source/bower_components/jquery/dist/jquery.min.js',
        './source/bower_components/jquery.scrollTo/jquery.scrollTo.min.js',
        //'./source/bower_components/slabText/js/jquery.slabtext.min.js',
        './source/bower_components/bxslider-4/src/js/jquery.bxslider.js',
        './source/js/knockout-min.js',
        //'./source/js/frameplayer.min.js',
        './source/js/fullPage.min.js',
        './source/js/leanModal.min.js',
        './source/js/app.js',
      ],
      styles: [
        './source/css/fonts.css',
        './source/css/font-awesome.min.css',
        //'./source/bower_components/frame-player/src/frameplayer.css',
        './source/css/styles.css'
      ]
    }
  }
};
