const angular = require("angular");

const app = angular.module("md-theme", []);

app.config(function($mdThemingProvider) {
    "ngInject";
    var customPrimary = {
        '50': '#595c65',
        '100': '#4d4f57',
        '200': '#41434a',
        '300': '#35373c',
        '400': '#292a2f',
        '500': '#1D1E21',
        '600': '#111213',
        '700': '#050506',
        '800': '#000000',
        '900': '#000000',
        'A100': '#656872',
        'A200': '#707480',
        'A400': '#7d818d',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#8b8bb5',
        '100': '#9b9bbf',
        '200': '#ababc9',
        '300': '#babad3',
        '400': '#cacadd',
        '500': '#d9d9e7',
        '600': '#f9f9fb',
        '700': '#ffffff',
        '800': '#ffffff',
        '900': '#ffffff',
        'A100': '#f9f9fb',
        'A200': '#E9E9F1',
        'A400': '#d9d9e7',
        'A700': '#ffffff'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#ffb280',
        '100': '#ffa266',
        '200': '#ff934d',
        '300': '#ff8333',
        '400': '#ff741a',
        '500': '#ff6400',
        '600': '#e65a00',
        '700': '#cc5000',
        '800': '#b34600',
        '900': '#993c00',
        'A100': '#ffc199',
        'A200': '#ffd1b3',
        'A400': '#ffe0cc',
        'A700': '#803200'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn');

});

module.exports = "md-theme";
