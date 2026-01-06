//get email + pass inputs
const password = easy_id_get("password"),
    email = easy_id_get("email"),
    name_ = easy_id_get("nom"),
    lastname = easy_id_get("prenom"),
    btn = easy_id_get("inscr_button");

function verify_inscr_form(e) {

    clear_errors();

    if (email.value == "") {
        e.preventDefault();
        show_error(email, "Vous devez remplir ce champ.");
    } else {
        //verify email
        if (!verify_email(email.value)) {
            e.preventDefault();
            show_error(email, "Ceci n'est pas un email.");
        } else {
            if (!verify_plateforme(email.value)) {
                e.preventDefault();
                show_error(email, "Vous devez utiliser le domaine de la Plateforme.");
            }
        }
    }

    if (password.value == "") {
        e.preventDefault();
        show_error(password, "Vous devez remplir ce champ.");
    } else {
        //check if secure
    }

    if (name_.value == "") {
        e.preventDefault();
        show_error(name_, "Vous devez remplir ce champ.");
    } else {
        //check if allowed (no special char)
    }

    if (lastname.value == "") {
        e.preventDefault();
        show_error(lastname, "Vous devez remplir ce champ.");
    } else {
        //check if allowed
    }
}

btn.addEventListener("click", verify_inscr_form);