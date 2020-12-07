let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

document.addEventListener('DOMContentLoaded', async function () {
    let calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        validRange: {
            start: today,
        },
        eventTimeFormat: eTFObject,
        contentHeight: 450,
        displayEventEnd: true,
        selectable: true,
        events: await opretEvents(),
        unselectAuto: true,
        locale: 'dk',
        weekNumbers: true,
        showNonCurrentDates: false,
        dateClick: async function (info) {
            let requests = await fetch('https://oldoak-weddings.herokuapp.com/api/requests');
            let jsondata = await requests.json();
            for (d of jsondata) {
                if (d.dato.slice(0, 10) === info.dateStr && d.status === true) {
                    alert('OBS: Datoen er ikke tilgængelig')
                    window.location.reload()
                } else {
                    let valgtDato = info.dateStr;
                    let datoTA = document.getElementById('dato');
                    datoTA.value = valgtDato;
                }
            }
        },
    });
    calendar.render();
});

opretEvents = async function () {
    let array = [];
    let requests = await fetch('https://oldoak-weddings.herokuapp.com/api/requests');
    let jsondata = await requests.json();
    for (d of jsondata) {
        if (d.status === false) {
            let eventObjOrange = {
                start: d.dato.slice(0, 10),
                display: 'background',
                color: 'orange'
            };
            array.push(eventObjOrange);
        } else if (d.status === true) {
            let eventObjRed = {
                start: d.dato.slice(0, 10),
                display: 'background',
                color: 'red'
            }
            array.push(eventObjRed);
        }
    }
    console.log(array)
    return array;
}

let eTFObject = {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false,
    hour12: false
};