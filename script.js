// WHEN I open the planner
// - THEN the current day is displayed at the top of the calendar

//  - HTML ID = currentDay
var currentDayEl = $("#currentDay");

// grab current day "moment()" and display in this format using moment: Saturday, Nov 06, 2021
var currentDay = moment().format("dddd, MMM DD, YYYY");
var saveBtn = $('.saveBtn');

currentDayEl.text(currentDay);

// format current hour (example: 11)
console.log("current hour:",moment().format("k"));

