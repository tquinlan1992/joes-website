const angular = require("angular");

const app = angular.module("sampleComponentModule", []);

app.component("sampleComponentIndex", {
    bindings: {
        test: '@',
        objectTest: "="
    },
    templateUrl: "components/sample/index.html",
    controller: function() {
        "ngInject";

        this.tasks = [1,2,3];

    }
});


module.exports = "sampleComponentModule";
