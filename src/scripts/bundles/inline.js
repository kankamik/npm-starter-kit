var loadCSS = require('../utils/loadCSS');
var supportsWoff2 = require('../utils/detect/woff2');
var pathPrefixOrigin = '/';
var config = {
    cssFontFileSrc: {
        fontWoff2: pathPrefixOrigin + 'stylesheets/data-woff2.css',
        fontWoff: pathPrefixOrigin + 'stylesheets/data-woff.css',
        fontTtf: pathPrefixOrigin + 'stylesheets/data-ttf.css'
    },
    css: [
        pathPrefixOrigin + 'scripts/bundle.js'
    ]
};

(function( ){
    "use strict";

    console.log('inline.js', supportsWoff2);

    loadCSS( supportsWoff2 ? config.cssFontFileSrc.fontWoff2 : config.cssFontFileSrc.fontWoff );

}( typeof global !== "undefined" ? global : this ));
