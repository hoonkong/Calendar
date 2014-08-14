/**
 * Created by hoon on 8/10/14.
 */
CalendarApp || (CalendarApp = {});

CalendarApp.controller("MonthCalendarController", ["$scope", "$routeParams", function ($scope, $routeParams) {

    var getMonthParam = function () {
        var monthParam = parseInt($routeParams.month);
        return !isNaN(monthParam) ? monthParam : new Date().getMonth();
    }

    var monthToUse = (function () {
        var monthParam = getMonthParam();

        if (monthParam < 0) {
            monthParam = -(12 + monthParam);
        } else if (monthParam < -11) {
            var multiplyFactor = Math.round(monthParam / 12) * -1;
            monthParam = 12 * multiplyFactor + monthParam;
        }

        return monthParam;
    })();

    var yearToUse = (function () {
        var monthParam = parseInt($routeParams.month);
        var addToCurrentYear = 0;
        if (monthParam > 11) {
            addToCurrentYear = Math.round(monthParam / 12);
        } else if (monthParam < -11) {
            addToCurrentYear = Math.round(-monthParam / 12);
        } else if (monthParam < 0) {
            addToCurrentYear = -1;
        }

        return new Date().getFullYear() + addToCurrentYear;
    })();

    $scope.daysInCurrentMonth = (function () {
        var days = [];

        var today = new Date();

        var month = monthToUse;
        var year = today.getFullYear();

        var firstDay = new Date(year, month, 1).getDay();

        for (var i = 0; i < firstDay; i++) {
            days.push("");
        }

        for (var i = 1; i <= 31; i++) {
            days.push(i);
        }

        return days;
    })();

    $scope.getMonth = function () {
        return CalendarApp.monthNames[Math.abs(monthToUse % 12)];
    };

    $scope.getYear = function () {
        return yearToUse;
    }

    $scope.nextMonth = getMonthParam() + 1;

    $scope.prevMonth = getMonthParam() - 1;
}]);