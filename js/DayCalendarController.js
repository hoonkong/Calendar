/**
 * Created by hoon on 8/10/14.
 */
if (typeof CalendarApp === "undefined" || !CalendarApp) {
    throw "App not initialized";
}

(function (calApp) {
    "use strict";

    calApp.controller("DayCalendarController",
        ["$scope", "$routeParams", "monthNames", "dayTimes", "dateService", "calendarControllerInterface", "constants",
            function ($scope, $routeParams, monthNames, dayTimes, dateService, calendarControllerInterface, constants) {
                calendarControllerInterface.getPrevUrl = function () {
                    var date = dateService.getDate() - 1;
                    var month = dateService.getMonth();
                    if (date <= 0) {
                        date = 31;
                        month--;
                    }

                    var prevUrl = constants.dayUrlFormat
                        .replace("{month}", month)
                        .replace("{day}", date)
                        .replace("{year}", dateService.getYear());
                    return prevUrl;
                };

                calendarControllerInterface.getNextUrl = function () {
                    var date = dateService.getDate() + 1;
                    var month = dateService.getMonth();
                    if (date > 31) {
                        date = 1;
                        month++;
                    }

                    var nextUrl = constants.dayUrlFormat
                        .replace("{month}", month)
                        .replace("{day}", date)
                        .replace("{year}", dateService.getYear());
                    return nextUrl;
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

                $scope.addEvent = function (flag) {
                    alert("add event! " + (flag === 0 ? "first half" : "second half"));
                };
            }
        ]
    );
})(CalendarApp);
