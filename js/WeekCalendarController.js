/**
 * Created by hoon on 8/16/14.
 */
if (!CalendarApp) {
    throw "CalendarApp is not defined";
}

CalendarApp.controller("WeekCalendarController",
    ["$scope", "$routeParams", "monthNames", "dayTimes", function ($scope, $routeParams, monthNames, dayTimes) {
    $scope.timeSlots = dayTimes;

    $scope.getMonth = function () {
        return monthNames[$routeParams.month];
    };

    $scope.getDate = function () {

    };
}]);


