const weather = require("./getWeather");
const _ = require("lodash");

const angular = require("angular");

const app = angular.module("todays-weather", []);

app.component("todaysWeather", {
    templateUrl: 'components/weather/index.html',
    controller: function($scope) {
        "ngInject";
        this.current = {};
        this.temperature = null;
        console.log("got here");
        weather.find({
            search: 'Boston, MA',
            degreeType: 'F'
        }, (err, result) => {
            console.log("result", result);
            if (err) {
                console.log("err", err);
            } else {
                const current = result[0].current;
                const forecastToday = _.find(result[0].forecast, {
                    date: current.date
                });
                this.temperature = current.temperature;
                this.high = forecastToday.high;
                this.low = forecastToday.low;
                $scope.$digest();
                console.log("current", current);
                console.log("forecastToday", forecastToday);
            }
        });
    }
});

module.exports = "todays-weather";
