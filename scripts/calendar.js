let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

// let dato1 = {
//     start: '2020-12-01',
//     display: 'background',
//     color: 'red'
// };
// let dato2 = {
//     start: '2020-12-05',
//     display: 'background',
//     color: 'red'
// }

// let array = [];
// array.push(dato1);
// array.push(dato2);
// console.log(array)

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
        events: opretEvents(),
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

    calendar.render();
});

opretEvents = async function () {
    let array = [];
    let requests = await fetch('http://localhost:8080/api/requests');
    let jsondata = await requests.json();
    for (d of jsondata) {
        let eventObj = {
            start: d.dato.slice(0, 10),
            display: 'background',
            color: 'red'
        };
        console.log(eventObj);
        array.push(eventObj);
    }
    console.log(array);
    return array;
}

let eTFObject = {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false,
    hour12: false
};