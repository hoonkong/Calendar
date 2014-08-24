/**
 * Created by hoon on 8/16/14.
 */
if (typeof CalendarApp === "undefined" || !CalendarApp) {
    throw "App not initialized";
}

(function (calApp) {
    calApp.controller("WeekCalendarController",
        ["$scope", "$routeParams", "monthNames", "dayTimes", "calendarControllerInterface",
            function ($scope, $routeParams, monthNames, dayTimes, calendarControllerInterface) {
                calendarControllerInterface.getPrevUrl = function () {
                    return "WeekPrev";
                };

                calendarControllerInterface.getNextUrl = function () {
                    return "WeekNext";
                };

                calendarControllerInterface.getTitle = function () {
                    var date = new Date($routeParams.year, $routeParams.month, $routeParams.day);
                    var dayOfWeek = date.getDay();

                    var startOfWeek = parseInt($routeParams.day) - dayOfWeek;
                    var endOfWeek = startOfWeek + 6;

                    return monthNames[$routeParams.month] + " " + startOfWeek + " - " + endOfWeek;
                };

                $scope.timeSlots = dayTimes;

                $scope.getDate = function () {

                };
            }
        ]
    );
})(CalendarApp);



