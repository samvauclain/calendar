var currentDayEl = $("#currentDay");

// grab current day "moment()" and display in this format using moment: Saturday, Nov 06, 2021
var currentDay = moment().format("dddd, MMM DD, YYYY");
// var saveBtn = $('.saveBtn');

currentDayEl.text(currentDay);

// format current hour (example: 11 AM)
var currentHour = moment().format('h A');
// alert(currentHour);

var events =[];
// var storedEvents = '';

// Dynamically create the calender rows & columns
    for (var i = 9; i < 18; i++) {

        // create elements for calendar entry              
        var rowEl = $(`<div></div>`).addClass("row");
        var timeColEl = $(`<div id="hour-col-${i}"></div>`).addClass("pt-4 col-2 col-md-1 hour");

        var currentCalendarHour = moment().hour(i).format('h A'); 
        // currentCalendarHour = currentCalendarHour.duration().subtract(Number);

        timeColEl.html(currentCalendarHour);
        var entryColEl = $(`<textarea id="eventText-${i}"></textarea>`).addClass("col-8 col-md-10 form-control");
        var saveColEl = $(`<div id="btn-${i}"></div>`).addClass("pt-4 col-2 col-md-1 saveBtn");

        saveColEl.append(`<i class="fas fa-save"><button></button></i>`).click(function () {
            // alert("click");
                var time = $(this).siblings().attr("id");
                var text = $(this).siblings(".form-control").val();
                localStorage.setItem(time, text);
                console.log(localStorage);
          });
        
        $(".container").append(rowEl);
        rowEl.append(timeColEl, entryColEl, saveColEl); 

        // check to see if hour has already past, is the current hour, or is in the future
        if (currentHour > currentCalendarHour || i === 9) {
            entryColEl.addClass("past");
        }
        else if (currentHour === currentCalendarHour || i === 9) {
            entryColEl.toggleClass("past present");
        }
        else {
            entryColEl.toggleClass("present future");
        }
    }

