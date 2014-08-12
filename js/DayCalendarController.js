/**
 * Created by hoon on 8/10/14.
 */
CalendarApp || (CalendarApp = {});

CalendarApp.controller("DayCalendarController", ["$scope", "$routeParams", function ($scope, $routeParams) {

    $scope.timeSlots = (function () {
        var timeSlots = [];

        for (var i = 0; i < 24; i++) {
            var displayTime = 0;
            var meridiem = "am";
            if (i === 0) {
                displayTime = 12;
            } else if (i >= 13) {
                meridiem = "pm";
                displayTime = i - 12;
            } else {
                displayTime = i;
            }

            timeSlots.push({
                display: displayTime,
                meridiem: meridiem
            });
        }

        return timeSlots;
    })();

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

        return CalendarApp.monthNames[monthNumber] + " " + $routeParams.day + ordinalSuffix;
    };

    $scope.addEvent = function () {

    };
}]);
