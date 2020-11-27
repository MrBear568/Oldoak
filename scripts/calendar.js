let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        validRange: {
            start: today,
        },
        eventTimeFormat: eTFObject,
        displayEventEnd: true,
        contentHeight: 600,
        height: 430,
        selectable: true,
        unselectAuto: true,
        locale: 'dk',
        weekNumbers: true,
        showNonCurrentDates: false,
        dateClick: function (info) {
            let valgtDato = info.dateStr;
            let datoTA = document.getElementById('dato');
            datoTA.value = valgtDato;
        },
    });

    // calendar.addEventSource();
    calendar.dayRender = async function (date, cell) {
        let bookinger = await fetch('http://localhost:8080/api/bookinger');
        let data = bookinger.json();
        for (d of data) {
            let jsonDato = new Date();
            let jsondd = String(d.getDate()).padStart(2, '0');
            let jsonmm = String(d.getMonth() + 1).padStart(2, '0');
            let jsonyyyy = d.getFullYear();
            jsonDato = jsonyyyy + '-' + jsonmm + '-' + jsondd;
            if (jsonDato === date) {
                cell.ccs("background-color", "red");
            }
        }
    }
    calendar.render();
});

let eTFObject = {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false,
    hour12: false
};