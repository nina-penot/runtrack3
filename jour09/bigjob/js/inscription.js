//get email + pass inputs
const password = easy_id_get("password"),
    email = easy_id_get("email"),
    name_ = easy_id_get("nom"),
    lastname = easy_id_get("prenom"),
    btn = easy_id_get("inscr_button");

function verify_inscr_form(e) {

    const error_models = {
        "empty": "Vous devez remplir ce champs.",
        "invalid name": "Nom invalide. Veuillez n'utiliser que des lettres, tirets ou espaces.",
        "invalid email": "Ceci n'est pas un email valide.",
        "plateforme": "Votre email doit faire parti du domaine de la Plateforme.",
        "password insecure": "Le mot de passe doit avoir 8 caractères minimum et contenir au moins une lettre majuscule, un chiffre et un caractère spécial."
    };

    let error_amt = 0;

    clear_errors();

    if (email.value == "") {
        e.preventDefault();
        show_error(email, error_models["empty"]);
    } else {
        //verify email
        if (!verify_email(email.value)) {
            e.preventDefault();
            show_error(email, error_models["invalid email"]);
        } else {
            if (!verify_plateforme(email.value)) {
                e.preventDefault();
                show_error(email, error_models["plateforme"]);
            }
        }
    }

    if (password.value == "") {
        e.preventDefault();
        show_error(password, error_models["empty"]);
    } else {
        //check if secure?
    }

    if (name_.value == "") {
        e.preventDefault();
        show_error(name_, error_models["empty"]);
    } else {
        if (!verify_name(name_.value)) {
            e.preventDefault();
            show_error(name_, error_models["invalid name"]);
        }
    }

    if (lastname.value == "") {
        e.preventDefault();
        show_error(lastname, error_models["empty"]);
    } else {
        if (!verify_name(name_.value)) {
            e.preventDefault();
            show_error(name_, error_models["invalid name"]);
        }
    }

    if (!easy_class_get("error")) {
        register(lastname.value, name_.value, email.value, password.value);
        redirect("connexion.html");
    }
}

btn.addEventListener("click", verify_inscr_form);