(function ($) {
    'use restrict'

    var isRegdOpen = true;
    var eventDate = "24"; // Date
    var eventMonth = "Sep"; // Month
    var eventYear = "2018"; //Year
    var eventHour = "10"; // Hour
    var eventMinute = "00"; // Minute
    var eventSecond = "00"; // Second

    var eventTitle = "Introduction to Athena"; // Event Title

    // Event Descrption
    var eventDescription = "Join the beginning of the most important one day immersion in the world of technical prototyping and bring a change. The unique possibility to enhance your professionalism with the smallest effort.";
    var eventVenue = "AV Hall, OEC BBSR"; // Venue
    var formLink = "#";


    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////



    // Date suffix
    let dateSuffix;
    let timeSuffix;
    let formatedTime;

    switch (eventDate[eventDate.length - 1]) {
        case 1:
            dateSuffix = 'st';
            break;
        case 2:
            dateSuffix = 'nd';
            break;
        case 3:
            dateSuffix = 'rd';
            break;
        default:
            dateSuffix = 'th'

    }

    if (parseInt(eventHour) > 12) {
        timeSuffix = 'pm';
        formatedTime = (parseInt(eventHour) - 12).toString();
        // alert(parseInt(eventDate) - 12)
    }
    else if (parseInt(eventHour) == 12) {
        timeSuffix = 'pm';
        formatedTime = '12';
        // alert(parseInt(eventDate) - 12)
    } else {
        timeSuffix = 'am';
        formatedTime = eventHour;
    }
    // alert(parseInt(eventDate));





    // Declarations
    let upcomingEventBody = $('.upcoming-event').children('.card-body');
    let upcomingEventTitle = upcomingEventBody.children('.card-title');
    let upcomingEventVenue = upcomingEventBody.children('.venue');
    let upcomingEventDescription = upcomingEventBody.children('.card-text');
    let upcomingEventFooter = $('.upcoming-event').children('.card-footer');
    let upcomingActionButton = upcomingEventFooter.children('.btn');


    upcomingEventTitle.text(eventTitle);
    upcomingEventVenue.text("Venue : " + eventVenue + " at " + formatedTime + ":" + eventMinute + " " + timeSuffix + " on " + eventDate + dateSuffix + " " + eventMonth + " " + eventYear);
    upcomingEventDescription.text(eventDescription);

    var countDownDate = new Date(eventDate + ' ' + eventMonth + ' ' + eventYear + ' ' + eventHour + ':' + eventMinute + ':' + eventSecond).getTime();

    setInterval(function () {
        var now = new Date().getTime();
        var timeGap = countDownDate - now;
        if (isRegdOpen && timeGap >= 0) {
            upcomingActionButton.removeClass('disabled');
            upcomingActionButton.text('Register');
            upcomingActionButton.attr('href', formLink);
        } else if (!isRegdOpen && timeGap >= 0) {
            upcomingActionButton.addClass('disabled');
            upcomingActionButton.text('Coming Soon');
        } else {
            upcomingActionButton.addClass('disabled');
            upcomingActionButton.text('Closed');
        }

        //  console.log(upcomingActionButton.text());
    }, 10);





})(jQuery);
