document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        eventTimeFormat: eTFObject,
        displayEventEnd: true,
        contentHeight: 600,
        selectable: true,
        unselectAuto: true,
        dateClick: function (info) {
            let valgtDato = info.dateStr;
            console.log(valgtDato);
            let datoTA = document.getElementById('dato');
            datoTA.value = valgtDato;

        }
    });
    //calendar.addEventSource();
    calendar.render();

});

let eTFObject = {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false,
    hour12: false
};