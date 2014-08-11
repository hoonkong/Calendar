/**
 * Created by hoon on 8/10/14.
 */
window.App = angular.module("calendarApp", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "MonthCalendarController",
                templateUrl: "views/MonthCalendar.html"
            })
            .when("/:month", {
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

window.App.monthNames = [
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