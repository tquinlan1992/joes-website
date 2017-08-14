const angular = require("angular");

angular.module("components-module", [
    require("./sample/app"),
    require("./home/app"),
    require("./sampleUrlParam/app"),
    require("./weather/app"),
    require("./mdTheme/app")
]);

module.exports = "components-module";
