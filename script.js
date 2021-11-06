var currentDayEl = $("#currentDay");

// grab current day "moment()" and display in this format using moment: Saturday, Nov 06, 2021
var currentDay = moment().format("dddd, MMM DD, YYYY");
var saveBtn = $('.saveBtn');

currentDayEl.text(currentDay);

// format current hour (example: 11)
console.log("current hour:", moment().format("k"));

var calendarEntries = {};

// container
/* <div class="row">
<div class="col-2 col-md-1 hour">
    <span></span>
</div>
<textarea class="col-8 col-md-10 past form-control"></textarea>
<div class="col-2 col-md-1 saveBtn">
  <p><i class="fas fa-save"></i></p>
</div>
</div> */

// On page load, dynamically create the calender rows & columns
$(document).ready(function() {
    // create elements for calendar entry              
    var rowEl = $("<div></div>").addClass("row");
    var colEl = $("<div></div>").addClass("col-2 col-md-1 hour");
    colEl.append("<span></span>")
    $(".container").append(rowEl, colEl);
});

