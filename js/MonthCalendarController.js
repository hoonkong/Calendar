/**
 * Created by hoon on 8/10/14.
 */
if (!CalendarApp) {
    throw "CalendarApp is not defined";
}

CalendarApp.controller(
    "MonthCalendarController",
    ["$scope", "$routeParams", "monthNames", "dateService", "calendarControllerInterface",
        function ($scope, $routeParams, monthNames, dateService, calendarControllerInterface) {

            var getMonthParam = function () {
                var monthParam = parseInt($routeParams.month);
                return !isNaN(monthParam) ? monthParam : new Date().getMonth();
            }

            var monthToUse = (function () {
                var monthParam = getMonthParam();

                if (monthParam < 0) {
                    monthParam = -(12 + monthParam);
                }

                return monthParam;
            })();

            calendarControllerInterface.getPrevUrl = function () {
                return getMonthParam() - 1;
            };

            calendarControllerInterface.getNextUrl = function () {
                return getMonthParam() + 1;
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
                var diff = new Date().getMonth() - getMonthParam();
                if (diff === 12) {
                    return "none";
                }
                return "inline";
            };
        }
    ]
);