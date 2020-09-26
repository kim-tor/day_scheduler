$(document).ready(function() {

    // display the date in the header using the id and copied the format directly from moment.js
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    var saveBtnEl = $(".saveBtn");
});

