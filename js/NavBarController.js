/**
 * Created by hoon on 8/11/14.
 */
if (!CalendarApp) {
    throw "CalendarApp is not defined";
}

CalendarApp.controller("NavBarController", ["$scope", "$routeParams", "calendarControllerInterface", function ($scope, $routeParams, calendarControllerInterface) {
    $scope.getMonth = function () {
        return $routeParams.month || this.getThisMonth();
    };

    $scope.getDay = function () {
        return $routeParams.day || this.getToday();
    };

    $scope.getYear = function () {
        return $routeParams.year || this.getThisYear();
    };

    $scope.getThisMonth = function () {
        return new Date().getMonth();
    };

    $scope.getToday = function () {
        return new Date().getDate();
    };

    $scope.getThisYear = function () {
        return new Date().getFullYear();
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
