let english = false;

exports.setEnglish = function() {
    english = true;
    console.log(english);
    window.location.reload();
}

exports.setDansk = function() {
    english = false;
    console.log(english);
    window.location.reload();
}

exports.findSprog = function() {
    return english;
}