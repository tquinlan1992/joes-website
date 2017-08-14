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
        weather.find({
            search: 'Boston, MA',
            degreeType: 'F'
        }, (err, result) => {
            if (err) {
                console.log("err getting weather data", err);
            } else {
                const current = result[0].current;
                const forecastToday = _.find(result[0].forecast, {
                    date: current.date
                });
                this.temperature = current.temperature;
                this.high = forecastToday.high;
                this.low = forecastToday.low;
                $scope.$digest();
            }
        });
    }
});

module.exports = "todays-weather";
