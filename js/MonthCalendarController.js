/**
 * Created by hoon on 8/10/14.
 */
if (typeof CalendarApp === "undefined" || !CalendarApp) {
    throw "App not initialized";
}

(function (calApp) {
    "use strict";

    calApp.controller(
        "MonthCalendarController",
        ["$scope", "$routeParams", "monthNames", "dateService", "calendarControllerInterface", "constants",
            function ($scope, $routeParams, monthNames, dateService, calendarControllerInterface , constants) {
                calendarControllerInterface.getPrevUrl = function () {
                    var prevUrl = constants.monthUrlFormat
                        .replace("{month}", (dateService.getMonth() - 1))
                        .replace("{day}", dateService.getDate())
                        .replace("{year}", dateService.getYear());
                    return prevUrl;
                };

                calendarControllerInterface.getNextUrl = function () {
                    var nextUrl = constants.monthUrlFormat
                        .replace("{month}", (dateService.getMonth() + 1))
                        .replace("{day}", dateService.getDate())
                        .replace("{year}", dateService.getYear());
                    return nextUrl;
                };

                calendarControllerInterface.getTitle = function () {
                    return monthNames[Math.abs(dateService.getMonth() % 12)] + " " + dateService.getYear();
                };

                $scope.daysInCurrentMonth = (function () {
                    var days = [];

                    var today = new Date();

                    var month = dateService.getMonth();
                    var year = today.getFullYear();

                    var firstDay = new Date(year, month, 1).getDay();

                    for (var i = 0; i < firstDay; i++) {
                        days.push({});
                    }

                    for (var i = 1; i <= 31; i++) {
                        days.push({
                            day: i,
                            month: month,
                            year: year
                        });
                    }

                    return days;
                })();

                $scope.showPrev = function () {
                    var diff = new Date().getMonth() - dateService.getMonth();
                    if (diff === 12) {
                        return "none";
                    }
                    return "inline";
                };
            }
        ]
    );
})(CalendarApp);
