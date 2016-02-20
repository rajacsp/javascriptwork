var monthsOfYear = new Array();
monthsOfYear[0] = "Jan";
monthsOfYear[1] = "Feb";
monthsOfYear[2] = "Mar";
monthsOfYear[3] = "Apr";
monthsOfYear[4] = "May";
monthsOfYear[5] = "Jun";
monthsOfYear[6] = "Jul";
monthsOfYear[7] = "Aug";
monthsOfYear[8] = "Sep";
monthsOfYear[9] = "Oct";
monthsOfYear[10] = "Nov";
monthsOfYear[11] = "Dec";
var longMonthsOfYear = new Array();
longMonthsOfYear[0] = "January";
longMonthsOfYear[1] = "February";
longMonthsOfYear[2] = "March";
longMonthsOfYear[3] = "April";
longMonthsOfYear[4] = "May";
longMonthsOfYear[5] = "June";
longMonthsOfYear[6] = "July";
longMonthsOfYear[7] = "August";
longMonthsOfYear[8] = "September";
longMonthsOfYear[9] = "October";
longMonthsOfYear[10] = "November";
longMonthsOfYear[11] = "December";
var daysOfWeek = new Array();
daysOfWeek[0] = "Sun";
daysOfWeek[1] = "Mon";
daysOfWeek[2] = "Tue";
daysOfWeek[3] = "Wed";
daysOfWeek[4] = "Thu";
daysOfWeek[5] = "Fri";
daysOfWeek[6] = "Sat";
var longDaysOfWeek = new Array();
longDaysOfWeek[0] = "Sunday";
longDaysOfWeek[1] = "Monday";
longDaysOfWeek[2] = "Tuesday";
longDaysOfWeek[3] = "Wednesday";
longDaysOfWeek[4] = "Thursday";
longDaysOfWeek[5] = "Friday";
longDaysOfWeek[6] = "Saturday";
var timeIndicator = new Array();
timeIndicator[0] = "AM";
timeIndicator[1] = "PM";

var focusDate = new Date("01 March, 2012");
var endDate = new Date(0);

var dateStr = "%Y-%m-%d %H:%M:%S";
var showTime = true;
var isDefault = true;

var rowFrom = -1;
var celFrom = -1;
var mouseIsDown = false;

var sTokenName = "sToken"
var sToken = "1,00a6344f,4f6b4098,93F7FD6D-BCC4-445E-A1D7-B6B865136FF6,VnmaTNKOiZaK7fhyTJMOehjv60M=";

var dayBold = new Array();

dayBold[28] = "true";

function loadLocalPage() {
    //alert('inside loadLocalPage');
    tsPageLoad();
}

