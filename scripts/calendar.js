let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        eventTimeFormat: eTFObject,
        displayEventEnd: true,
        contentHeight: 600,
        selectable: true,
        unselectAuto: true,
        locale: 'dk',
        weekNumbers: true,
        showNonCurrentDates: false,
        // dayRender: async function (date, cell) {
        //     let bookinger = await fetch('http://localhost:8080/api/bookinger');
        //     let data = bookinger.json();
        //     console.log(data)
        //     for (d of data) {
        //         console.log(d);
        //     }
        // },
        dayRender: function (date, cell) {
            if (today === date.getDate()) {
                cell.css("background-color", "red");
            }
        },
        dateClick: function (info) {
            let valgtDato = info.dateStr;
            let datoTA = document.getElementById('dato');
            datoTA.value = valgtDato;
        }
    });
    calendar.addEventSource();
    calendar.render();
});


let eTFObject = {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false,
    hour12: false
};