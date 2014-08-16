/**
 * Created by hoon on 8/16/14.
 */
CalendarApp || (CalendarApp = {});

CalendarApp.controller("WeekCalendarController",
    ["$scope", "$routeParams", "monthNames", "dayTimes", function ($scope, $routeParams, monthNames, dayTimes) {
    $scope.timeSlots = dayTimes;

    $scope.getMonth = function () {
        return monthNames[$routeParams.month];
    };
}]);


