/**
 * Created by hoon on 8/10/14.
 */
angular.module("calendarApp", [])
    .controller("CalendarController", ["$scope", function ($scope) {

        $scope.daysInCurrentMonth = (function () {
            var days = [];
            for (var i = 1; i <= 31; i++) {
                days.push(i);
            }

            return days;
        })();

        $scope.getCurrentMonth = function () {
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var date = new Date();
            var monthNumber = date.getMonth();
            return monthNames[monthNumber];
        }
    }]);