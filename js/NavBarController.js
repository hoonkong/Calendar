/**
 * Created by hoon on 8/11/14.
 */
CalendarApp || (CalendarApp = {});

CalendarApp.controller("NavBarController", ["$scope", function ($scope) {
    $scope.getMonth = function () {
        return new Date().getMonth();
    };

    $scope.getDay = function () {
        return new Date().getDate();
    };

    $scope.getYear = function () {
        return new Date().getFullYear();
    };

    $scope.getWeek = function () {
        return new Date().getDate();
    };
}]);
