function alertFunction() {
    const emne = document.getElementById('emne');
    const email = document.getElementById('email')
    const navn = document.getElementById('navn');
    const tlfnummer = document.getElementById('tlfNummer');
    const besked = document.getElementById('besked');
    const dato = document.getElementById('dato');
    if (emne.value.length > 0 && email.value.length > 0 && navn.value.length > 0 && tlfnummer.value.length > 0 && besked.value.length > 0 && dato.value.length > 0) {
        alert('Tak for din henvendelse. Jeg vender tilbage til dig snarest muligt :-)');
    }
}