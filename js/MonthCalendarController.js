/**
 * Created by hoon on 8/10/14.
 */
App || (App = {});

App.controller("MonthCalendarController", ["$scope", "$routeParams", function ($scope, $routeParams) {

    var monthToUse = (function () {
        var monthParam = parseInt($routeParams.month);
        return monthParam - 1 || new Date().getMonth();
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

    $scope.getCurrentMonth = function () {
        return App.monthNames[monthToUse];
    };

    $scope.dayClick = function (day) {
        if (day) {
            alert(day + " clicked!");
        }
    };

    $scope.nextMonth = monthToUse + 2;

    $scope.prevMonth = monthToUse;
}]);