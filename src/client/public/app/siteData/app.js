const angular = require("angular");
const getSiteData = require("./getSiteData");

const app = angular.module("site-data-module", [
]);

app.service("siteData", () => {
    "ngInject";
    return getSiteData.getSiteData();
});

module.exports = "site-data-module";
