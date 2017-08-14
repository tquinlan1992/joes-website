const angular = require("angular");

const app = angular.module("home-module", [
]);

app.component("home", {
        templateUrl: "components/home/index.html",
        controller: ($scope) => {
            "ngInject";
            $scope.objectTest = {
                text: "objectTest is working"
            };
        }
});
module.exports = "home-module";
