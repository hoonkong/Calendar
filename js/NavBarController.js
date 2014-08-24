/**
 * Created by hoon on 8/11/14.
 */
if (typeof CalendarApp === "undefined" || !CalendarApp) {
    throw "App not initialized";
}

(function (calApp) {
    calApp.controller("NavBarController", ["$scope", "$routeParams", "calendarControllerInterface", "constants",
        function ($scope, $routeParams, calendarControllerInterface, constants) {
            var getThisMonth = function () {
                return new Date().getMonth();
            };

            var getToday = function () {
                return new Date().getDate();
            };

            var getThisYear = function () {
                return new Date().getFullYear();
            };

            var getMonth = function () {
                return $routeParams.month || getThisMonth();
            };

            var getDay = function () {
                return $routeParams.day || getToday();
            };

            var getYear = function () {
                return $routeParams.year || getThisYear();
            };

            var formatUrl = function (format) {
                return format
                    .replace("{month}", getMonth())
                    .replace("{day}", getDay())
                    .replace("{year}", getYear());
            };

            $scope.getPrevUrl = function () {
                return calendarControllerInterface.getPrevUrl();
            };

            $scope.getNextUrl = function () {
                return calendarControllerInterface.getNextUrl();
            };

            $scope.getTitle = function () {
                return calendarControllerInterface.getTitle();
            };

            $scope.getDayUrl = function () {
                return formatUrl(constants.dayUrlFormat);
            };

            $scope.getWeekUrl = function () {
                return formatUrl(constants.weekUrlFormat);
            };

            $scope.getMonthUrl = function () {
                return formatUrl(constants.monthUrlFormat);
            };

            $scope.getTodayUrl = function () {
                return constants.dayUrlFormat
                    .replace("{month}", getThisMonth())
                    .replace("{day}", getToday())
                    .replace("{year}", getThisYear());
            };
        }
    ]);
})(CalendarApp);