/**
 * Created by hoon on 8/17/14.
 */

if (!CalendarApp) {
    throw "CalendarApp is not defined";
}

CalendarApp.service("dateService", ["$routeParams", function ($routeParams) {
    var getDate = function () {

    };

    var getMonth = function () {
        var monthParam = parseInt($routeParams.month);
        monthParam = !isNaN(monthParam) ? monthParam : new Date().getMonth();

        if (monthParam < 0) {
            monthParam = -(12 + monthParam);
        }

        return monthParam;
    };

    var getYear = function () {
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
    };

    this.getDate = getDate;
    this.getMonth = getMonth;
    this.getYear = getYear;
}]);
