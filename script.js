$(document).ready(function () {

    // display the date in the header using the id and copied the format directly from moment.js
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var saveBtnEl = $(".saveBtn");

    function timeTracker() {
        // element to hold the current hour
        var currHour = moment().hour();
        console.log(currHour);

        //create a loop to check each time block 
        $(".hour").each(function () {
            //element for each time block 
            var timeBlock = parseInt($(this).attr("id"));
            console.log(timeBlock);

            // create if/else statement to check whether it is past, present, or future.
            // could only get my if statement to work by changing it to military time

            //currently the background color of my time is what is updating, how do I get the text area to update?

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

