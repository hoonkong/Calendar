/**
 * Created by hoon on 8/16/14.
 */
if (typeof CalendarApp === "undefined" || !CalendarApp) {
    throw "App not initialized";
}

(function (calApp) {
    calApp.controller("WeekCalendarController",
        ["$scope", "$routeParams", "monthNames", "dayTimes", "dateService", "calendarControllerInterface", "constants",
            function ($scope, $routeParams, monthNames, dayTimes, dateService, calendarControllerInterface, constants) {
                calendarControllerInterface.getPrevUrl = function () {
                    var date = dateService.getDate() - 7;
                    var month = dateService.getMonth();
                    if (date <= 0) {
                        date = 31 + date;
                        month--;
                    }

                    var prevUrl = constants.weekUrlFormat
                        .replace("{month}", month)
                        .replace("{day}", date)
                        .replace("{year}", dateService.getYear());
                    return prevUrl;
                };

                calendarControllerInterface.getNextUrl = function () {
                    var date = dateService.getDate() + 7;
                    var month = dateService.getMonth();
                    if (date > 31) {
                        date = date - 31;
                        month++;
                    }

                    var nextUrl = constants.weekUrlFormat
                        .replace("{month}", month)
                        .replace("{day}", date)
                        .replace("{year}", dateService.getYear());
                    return nextUrl;
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



