/**
 * Created by hoon on 8/10/14.
 */

App.controller("MonthCalendarController", ["$scope", function ($scope) {

        var monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"];

        $scope.daysInCurrentMonth = (function () {
            var days = [];

            var today = new Date();

            var month = today.getMonth();
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

            var date = new Date();
            var monthNumber = date.getMonth();
            return monthNames[monthNumber];
        };

        $scope.dayClick = function (day) {
            if (day) {
                alert(day + " clicked!");
            }
        };
    }]);