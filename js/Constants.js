/**
 * Created by hoon on 8/22/14.
 */
if (typeof CalendarApp === "undefined" || !CalendarApp) {
    throw "App not initialized";
}

(function (calApp) {
    "use strict";

    calApp.service("constants", function () {
        this.monthUrlFormat = "/Month/{month}/ForDay/{day}/Year/{year}";
        this.dayUrlFormat = "/Month/{month}/Day/{day}/Year/{year}";
        this.weekUrlFormat = "/Month/{month}/WeekOf/{day}/Year/{year}";
    });
})(CalendarApp);
