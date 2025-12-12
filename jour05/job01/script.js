//FUNCTIONS-------------------------

/**
 * Easier way to just document.getElementById
 * @param {*} id Id of the element to get
 * @returns The element, or null if it doesn't exist
 */
function doc_id_get(id) {
    return document.getElementById(id);
}

/**
 * Add classes to elements easier. Can use a single str class or an array of multiple classes.
 * 
 * @param {*} element The element to modify
 * @param {*} classes The class (or classes) to add to the element
 */
function add_class(element, classes) {
    if (typeof classes == "string") {
        element.classList.add(classes);
    } else {
        for (cl of classes) {
            element.classList.add(cl);
        }
    }
}

function add_error_message(message, prev_element) {
    let el = document.createElement("div");
    el.textContent = message;
    add_class(el, "error");
    prev_element.after(el);
}

function remove_all_errors() {
    let myerrors = document.querySelectorAll(".error");
    if (myerrors != null) {
        if (myerrors.length > 0) {
            myerrors.forEach(e => e.remove());
        }
    }
}

function is_name_ok(name) {
    let regex = /^[a-zA-Z\p{L}\s\- ]+$/u;
    if (name.match(regex)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Checks if email ok
 * @param {*} email the email to check
 * @returns bool
 */
function is_email_ok(email) {
    //check if email
    let regex = /^((?!\.)[\w\-_.À-ÿ\u00f1\u00d1]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/umg;
    // let regex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
    if (email.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function is_pass_ok(pass) {
    //Must have at least one number, one maj, one min and one special char
    //Must be at least 8 char long
    errors = 0;
    regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;

    if (pass.length < 12) {
        // add_error_message(notlong, pass_input);
        errors++;
    }
    if (!pass.match(regex)) {
        // add_error_message(notcomplex, pass_input)
        errors++;
    }

    if (errors > 0) {
        // for (n of errors) {
        //     add_error_message(n, pass_input);
        // }
        return false;
    } else {
        return true;
    }
}

function is_pcode_ok(pcode) {
    //Must only be numbers
    // let regex = /^[0-9]*$/;
    let regex = /^[0-9]+$/;
    //Must have 5 numbers
    if (pcode.match(regex) && pcode.length == 5) {
        return true;
    } else {
        return false;
    }
}

function check_name(name) {
    if (name == null) {
        return null;
    } else {
        console.log(name.value);
        if (is_name_ok(name.value)) {
            return true;
        } else {
            //add_error_message(error_models["nameincorrect"], name);
            return false;
        }
    }
}

function check_email(email) {
    if (email == null) {
        return null;
    } else {
        if (is_email_ok(email.value)) {
            return true;
        } else {
            //add_error_message(error_models["emailincorrect"], email)
            return false;
        }
    }
}

function check_pass(pass) {
    if (pass == null) {
        return null;
    } else {
        if (is_pass_ok(pass.value)) {
            return true;
        } else {
            //add_error_message(error_models["passincorrect"], pass);
            return false;
        }
    }
}

function check_pcode(pcode) {
    if (pcode == null) {
        return null;
    } else {
        if (is_pcode_ok(pcode.value)) {
            return true;
        } else {
            //add_error_message(error_models["pcodeincorrect"]);
            return false;
        }
    }
}

//CODE----------------------

const email_input = doc_id_get("email"),
    pass_input = doc_id_get("password"),
    name_input = doc_id_get("name"),
    lastname_input = doc_id_get("lastname"),
    adress_input = doc_id_get("adress"),
    pcode_input = doc_id_get("pcode"),
    submit_btn = doc_id_get("submit"),
    inscription = doc_id_get("inscription");

const input_array = [
    email_input,
    pass_input,
    name_input,
    lastname_input,
    adress_input,
    pcode_input,
];

const error_models =
{
    "nameincorrect": "Votre nom ne doit contenir que des lettres, tirets ou espaces.",
    "emailincorrect": "Votre email doit suivre le format email@domain.topdom.",
    "passincorrect": "Votre mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial. Il doit aussi avoir au moins 8 caractères.",
    "pcodeincorrect": "Votre code postal est incorrect, il doit être composé de 5 chiffres.",
};

input_array.forEach((inp) => {
    inp.addEventListener("keydown", (e) => {
        if (e.key == "Delete") {
            e.preventDefault();
            inp.value = "";
        }
    })
});

submit_btn.addEventListener("click", (e) => {
    // e.preventDefault();
    remove_all_errors();
    //must verify all fields if ok
    //if not, add to errors
    let errors = 0;
    if (!check_name(name_input) && check_name(name_input) != null) {
        errors++;
        add_error_message(error_models["nameincorrect"], name_input);
    }
    if (!check_name(lastname_input) && check_name(lastname_input) != null) {
        errors++;
        add_error_message(error_models["nameincorrect"], lastname_input);
    }
    if (!check_email(email_input) && check_email(email_input) != null) {
        errors++;
        add_error_message(error_models["emailincorrect"], email_input);
    }
    if (!check_pass(pass_input) && check_pass(pass_input) != null) {
        errors++;
        add_error_message(error_models["passincorrect"], pass_input);
    }
    if (!check_pcode(pcode_input) && check_pcode(pcode_input) != null) {
        errors++;
        add_error_message(error_models["pcodeincorrect"], pcode_input);
    }

    if (errors > 0) {
        e.preventDefault();
        console.log(errors);
        return false;
    } else {
        submit_btn.removeEventListener("click", (e));
        return true;
    }
    //then if errors not empty, add all the errors
    //if empty, then send the form
})