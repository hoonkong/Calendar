/**
 * Created by hoon on 8/10/14.
 */
if (typeof CalendarApp === "undefined" || !CalendarApp) {
    throw "App not initialized";
}

(function (calApp) {
    "use strict";

    calApp.controller("DayCalendarController",
        ["$scope", "$routeParams", "monthNames", "dayTimes", "calendarControllerInterface",
            function ($scope, $routeParams, monthNames, dayTimes, calendarControllerInterface) {
                calendarControllerInterface.getPrevUrl = function () {
                    return "DayPrev";
                };

                calendarControllerInterface.getNextUrl = function () {
                    return "DayNext";
                };

                calendarControllerInterface.getTitle = function () {
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

                $scope.timeSlots = dayTimes;

                $scope.addEvent = function () {

                };
            }
        ]
    );
})(CalendarApp);
