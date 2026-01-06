if (!is_logged_in()) {
    redirect("index.html");
}

load_requests();

//get the date input
const datepick = easy_id_get("date-picker");

//get today's date
let curr_date = new Date();
let month = curr_date.getMonth() + 1 > 9 ? curr_date.getMonth() + 1 : "0" + (curr_date.getMonth() + 1);
let day = curr_date.getDate() > 9 ? curr_date.getDate() : "0" + curr_date.getDate();
let mydate = curr_date.getFullYear() + "-" + month + "-" + day;
datepick.min = mydate;

function requestPresence() {
    clear_errors()
    if (is_past_date(datepick.value)) {
        show_error(datepick, "Cette date est passée et n'est plus valide.");
    } else if (datepick.value == "") {
        show_error(datepick, "Vous devez sélectionner une date.")
    } else {
        //save date in requests
        email = sessionStorage.getItem("login");
        save_request(email, datepick.value);
        show_success(datepick, "Votre requête pour le : " + datepick.value + " a été enregistrée.");
    }
}

