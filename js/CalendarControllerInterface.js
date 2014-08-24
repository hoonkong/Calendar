/**
 * Created by hoon on 8/20/14.
 */

if (!CalendarApp) {
    throw "CalendarApp is not defined";
}

CalendarApp.service("calendarControllerInterface", function () {
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
