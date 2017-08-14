const angular = require("angular");

const app = angular.module("home-module", [
]);

app.component("home", {
        templateUrl: "components/home/index.html",
        controller: function($scope, siteData) {
            "ngInject";
            this.siteData = siteData;
            console.log("this.siteData", siteData);
            $scope.objectTest = {
                text: "objectTest is working"
            };
        }
});
module.exports = "home-module";
