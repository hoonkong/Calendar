/**
 * Created by hoon on 8/11/14.
 */
if (!CalendarApp) {
    throw "CalendarApp is not defined";
}

CalendarApp.controller("NavBarController", ["$scope", "$routeParams", "calendarControllerInterface", function ($scope, $routeParams, calendarControllerInterface) {
    $scope.getMonth = function () {
        return $routeParams.month || new Date().getMonth();
    };

    $scope.getDay = function () {
        return $routeParams.day || new Date().getDate();
    };

    $scope.getYear = function () {
        return $routeParams.year || new Date().getFullYear();
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
