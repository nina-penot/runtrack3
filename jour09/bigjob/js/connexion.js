//get email + pass inputs
const password = easy_id_get("password"),
    email = easy_id_get("email"),
    btn = easy_id_get("conn_button");

function verify_conn_form(e) {

    clear_errors();

    if (email.value == "") {
        e.preventDefault();
        show_error(email, "Vous devez remplir ce champ.");
    } else {
        if (!does_email_exists(email.value)) {
            e.preventDefault();
            show_error(email, "Cet email n'existe pas.");
        } else {
            if (password.value != "") {
                if (verify_password(email.value, password.value)) {
                    e.preventDefault();
                    connect(email.value);
                    redirect("index.html");
                } else {
                    e.preventDefault();
                    show_error(password, "Mot de passe incorrect.")
                }
            }
        }
    }

    if (password.value == "") {
        e.preventDefault();
        show_error(password, "Vous devez remplir ce champ.");
    } else {
        if (email.value == "") {
            e.preventDefault();
            show_error(password, "Veuillez renseigner votre email.");
        }
    }

}

btn.addEventListener("click", verify_conn_form);