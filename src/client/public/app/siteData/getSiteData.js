const request = require("request");
const resolveUrl = require("resolve-url");

let siteData = null;

function getSiteDataCallback(done) {
    request(resolveUrl("/data.json"), {
        json: true
    }, (err, response, data) => {
        siteData = data;
        done();
    });
}

function getSiteData() {
    return siteData;
}

module.exports = {
    getSiteDataCallback,
    getSiteData
};
