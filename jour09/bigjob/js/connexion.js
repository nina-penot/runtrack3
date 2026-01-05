//get email + pass inputs
const password = easy_id_get("password"),
    email = easy_id_get("email");

function verify_conn_form() {
    clear_errors();
    if (password == "") {
        show_error(password, "Vous devez remplir ce champ.")
    }
    if (email == "") {
        show_error(email, "Vous devez remplir ce champ.")
    }
}