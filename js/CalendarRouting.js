/**
 * Created by hoon on 8/10/14.
 */
var CalendarApp = {};

CalendarApp = angular.module("calendarApp", ["ngRoute"])
    .factory("monthNames", function () {
        return [
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
    })
    .factory("dayNames", function () {
        return [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"];
    })
    .factory("dayTimes", function() {
        var timeSlots = [];

        for (var i = 0; i < 24; i++) {
            var displayTime = 0;
            var meridiem = "am";
            if (i === 0 || i === 12) {
                displayTime = 12;
                if (i === 12) {
                    meridiem = "pm";
                }
            } else if (i > 12) {
                meridiem = "pm";
                displayTime = i - 12;
            } else {
                displayTime = i;
            }

            timeSlots.push({
                display: displayTime,
                meridiem: meridiem
            });
        }

        return timeSlots;
    })
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
            .when("/Month/:month/Week/:week", {
                controller: "WeekCalendarController",
                templateUrl: "views/WeekCalendar.html"
            })
            .otherwise( {
                redirectTo: "/"
            })
    }]);
