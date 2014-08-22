/**
 * Created by hoon on 8/16/14.
 */
if (!CalendarApp) {
    throw "CalendarApp is not defined";
}

CalendarApp.controller("WeekCalendarController",
    ["$scope", "$routeParams", "monthNames", "dayTimes", "calendarControllerInterface",
        function ($scope, $routeParams, monthNames, dayTimes, calendarControllerInterface) {

            calendarControllerInterface.getPrevUrl = function () {
                return "WeekPrev";
            };

            calendarControllerInterface.getNextUrl = function () {
                return "WeekNext";
            };

            calendarControllerInterface.getTitle = function () {
                return monthNames[$routeParams.month];
            };

            $scope.timeSlots = dayTimes;

            $scope.getDate = function () {

            };
        }
    ]
);


