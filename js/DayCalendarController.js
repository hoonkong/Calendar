/**
 * Created by hoon on 8/10/14.
 */
CalendarApp || (CalendarApp = {});

CalendarApp.controller("DayCalendarController",
    ["$scope", "$routeParams", "monthNames", "dayTimes", function ($scope, $routeParams, monthNames, dayTimes) {

    $scope.timeSlots = dayTimes;

    $scope.getTodaysDate = function () {
        var date = new Date();
        var monthNumber = date.getMonth();

        var day = parseInt($routeParams.day);

        var ordinalSuffix = "th";

        switch (day) {
            case 1:
                ordinalSuffix = "st";
                break;
            case 2:
                ordinalSuffix = "nd";
                break;
            case 3:
                ordinalSuffix = "rd";
                break;
            default :
                ordinalSuffix = "th";
                break;
        }

        console.log($routeParams.data);
        return monthNames[Math.abs($routeParams.month % 12)] + " " + $routeParams.day + ordinalSuffix + ", " + $routeParams.year;
    };

    $scope.addEvent = function () {

    };
}]);
