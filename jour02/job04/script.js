var keylogger = document.getElementById("keylogger");

window.addEventListener('keydown', function (e) {
    e.preventDefault();
    // keylogger.value += e.key;
    keylogger.value = document.activeElement.id == "keylogger" ?
        keylogger.value + e.key + e.key : keylogger.value + e.key;
})