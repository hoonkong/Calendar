/**
 * Created by hoon on 8/10/14.
 */
window.CalendarApp = angular.module("calendarApp", ["ngRoute"])
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
            .when("/Month/:month/Day/:day/Year/:year", {
                controller: "DayCalendarController",
                templateUrl: "views/DayCalendar.html"
            })
            .when("/WeekCalendar", {
                controller: "WeekCalendarController",
                templateUrl: "views/WeekCalendar.html"
            })
            .otherwise( {
                redirectTo: "/"
            })
    }]);

window.CalendarApp.monthNames = [
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

window.CalendarApp.dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"];