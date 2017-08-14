const angular = require("angular");

const app = angular.module("header-nav", [
]);

app.component("headerNav", {
        templateUrl: 'components/headerNav/index.html'
});

module.exports = "header-nav";
