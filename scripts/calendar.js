document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        eventTimeFormat: eTFObject,
        displayEventEnd: true,
        /*events: getEvents()/*/
    });
    calendar.addEventSource(getEvents());
    calendar.render();
});