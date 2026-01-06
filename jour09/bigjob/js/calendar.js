if (!is_logged_in()) {
    redirect("index.html");
}

//get the date input
const datepick = easy_id_get("date-picker");

//get today's date
let curr_date = new Date();
let month = curr_date.getMonth() + 1 > 9 ? curr_date.getMonth() + 1 : "0" + (curr_date.getMonth() + 1);
let day = curr_date.getDate() > 9 ? curr_date.getDate() : "0" + curr_date.getDate();
let mydate = curr_date.getFullYear() + "-" + month + "-" + day;
console.log(mydate);
datepick.min = mydate;

function requestPresence() {
    if (is_past_date(datepick.value)) {
        show_error(datepick, "Date invalide.");
    } else {
        //save date in requests
        let requests = JSON.parse(localStorage.getItem("requests"));

    }
}

