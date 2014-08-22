/**
 * Created by hoon on 8/11/14.
 */
if (!CalendarApp) {
    throw "CalendarApp is not defined";
}

CalendarApp.controller("NavBarController", ["$scope", "calendarControllerInterface", function ($scope, calendarControllerInterface) {
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

    $scope.getPrevUrl = function () {
        return calendarControllerInterface.getPrevUrl();
    };

    $scope.getNextUrl = function () {
        return calendarControllerInterface.getNextUrl();
    };

    $scope.getTitle = function () {
        return calendarControllerInterface.getTitle();
    }
}]);
