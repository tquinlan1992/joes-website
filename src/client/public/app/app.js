const async = require("async");
const getLanguageJSON = require("./resourceLanguages/getLanguageJSON");
const getSiteDataCallback = require("./siteData/getSiteData").getSiteDataCallback;

async.series([
    done => {
        async.parallel([
            done => {
                getLanguageJSON(done);
            },
            done => {
                getSiteDataCallback(done);
            }
        ], () => {
            done();
        });
    },
    done => {
        require("./angularApp");
        done();
    }
]);
