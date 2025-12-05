var keylogger = document.getElementById("keylogger");

document.addEventListener('keydown', function (e) {
    keylogger.value += e.key;
})