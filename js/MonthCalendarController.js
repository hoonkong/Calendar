/**
 * Created by hoon on 8/10/14.
 */
CalendarApp || (CalendarApp = {});

CalendarApp.controller(
    "MonthCalendarController",
    ["$scope", "$routeParams", "monthNames", function ($scope, $routeParams, monthNames) {

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

    $scope.getMonth = function () {
        return monthNames[Math.abs(monthToUse % 12)];
    };

    $scope.getYear = function () {
        return yearToUse;
    };

    $scope.showPrev = function () {
        var diff = new Date().getMonth() - getMonthParam();
        if (diff === 12) {
            return "none";
        }
        return "inline";
    };

    $scope.nextMonth = getMonthParam() + 1;

    $scope.prevMonth = getMonthParam() - 1;

}]);