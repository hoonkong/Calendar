/**
 * Created by hoon on 8/20/14.
 */
if (typeof CalendarApp === "undefined" || !CalendarApp) {
    throw "App not initialized";
}

(function (calApp) {
    "use strict";

    calApp.service("calendarControllerInterface", function () {
        this.getPrevUrl = function () {
            //throw "getPrevUrl not implemented";
        };

        this.getNextUrl = function () {
            //throw "getNextUrl not implemented";
        };

        this.getTitle = function () {
            //throw "getTitle not implemented";
        };
    });
})(CalendarApp);

