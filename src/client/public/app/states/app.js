const angular = require("angular");
const _ = require("lodash");
require('angular-ui-router');
const app = angular.module("states-module", [
    'ui.router',
    require("./components/app")
]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise("/home");

    const states = _.concat(
        [{
            name: "index",
            abstract: true,
            views: {
                "": {
                    component: "index"
                }
            }
        }],
        require("./index/index")
    );

    _.forEach(states, state => {
        $stateProvider.state(state);
    });

    $locationProvider.html5Mode(true);
});

module.exports = "states-module";
