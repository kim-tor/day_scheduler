$(document).ready(function () {

    // display the date in the header using the id and copied the format directly from moment.js
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    function timeTracker() {
        // element to hold the current hour
        var currHour = moment().hour();
        console.log(currHour);

        //create a loop to check each time block 
        $(".time-block").each(function () {
            //element for each time block 
            var timeBlock = parseInt($(this).attr("id"));
            console.log(timeBlock);

            // create if/else statement to check whether it is past, present, or future.
            // could only get my if statement to work by changing it to military time
            if (timeBlock < currHour) {
                $(this).addClass("past");
            }
            else if (timeBlock === currHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        });
    };

    timeTracker();
});

$(".saveBtn").on("click", function () {
    // console.log(this); // "this" is the button being clicked
    var time = $(this).parent().attr("id"); // to get the time using the id of the row (the parent)
    var text = $(this).siblings(".description").val(); // to get the value of the text area using the description id as selector, text area is a sibling of button
    // console.log(time);
    // console.log(text);
    // set values in local storage
    localStorage.setItem(time, text);

});

//saving inputs on to page so that they don't get wiped when refreshed *this is where I need help*
$("#9").children(".description").val(localStorage.getItem("9"));
// console.log($("#9").children(".description").val());

$("#10").children(".description").val(localStorage.getItem("10"));
// console.log($("#10").children(".description").val());

$("#11").children(".description").val(localStorage.getItem("11"));
// console.log($("#11").children(".description").val());

$("#12").children(".description").val(localStorage.getItem("12"));
// console.log($("#12").children(".description").val());

$("#13").children(".description").val(localStorage.getItem("13"));
// console.log($("#13").children(".description").val());

$("#14").children(".description").val(localStorage.getItem("14"));
// console.log($("#14").children(".description").val());

$("#15").children(".description").val(localStorage.getItem("15"));
// console.log($("#15").children(".description").val());

$("#16").children(".description").val(localStorage.getItem("16"));
// console.log($("#16").children(".description").val());

$("#17").children(".description").val(localStorage.getItem("17"));
// console.log($("#17").children(".description").val());



