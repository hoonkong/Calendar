/**
 * Created by hoon on 8/10/14.
 */
var App = angular.module("calendarApp", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "MonthCalendarController",
                templateUrl: "views/MonthCalendar.html"
            })
            .when("/DayCalendar/:day", {
                controller: "DayCalendarController",
                templateUrl: "views/DayCalendar.html"
            })
            .otherwise( {
                redirectTo: "/"
            })
    }]);