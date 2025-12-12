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

/**
 * Checks if email ok
 * @param {*} email the email to check
 * @returns bool
 */
function is_email_ok(email) {
    //check if email
    let regex = /^((?!\.)[\w\-_.À-ÿ\u00f1\u00d1]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/umg;
    if (email.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function is_pass_ok(pass) {
    //Must have at least one number, one maj, one min and one special char
    //Must be at least 8 char long
    let notlong = "Votre mot de passe doit contenir au moins 8 caractères.",
        notcomplex = `Votre message doit contenir au moins un chiffre, 
        une majuscule, une minuscule et un caractère spécial (!,?,%...)`,
        errors = [];

    if (pass.length < 8) {
        // add_error_message(notlong, pass_input);
        errors.push(notlong);
    }
    if (!"regex here") {
        // add_error_message(notcomplex, pass_input)
        errors.push(notcomplex);
    }

    if (errors.length > 0) {
        for (n of errors) {
            add_error_message(n, pass_input);
        }
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

//CODE----------------------

const email_input = doc_id_get("email"),
    pass_input = doc_id_get("password"),
    name_input = doc_id_get("name"),
    lastname_input = doc_id_get("lastname"),
    adress_input = doc_id_get("adress"),
    pcode_input = doc_id_get("pcode"),
    submit_btn = doc_id_get("submit");

const input_array = [
    email_input,
    pass_input,
    name_input,
    lastname_input,
    adress_input,
    pcode_input,
];

input_array.forEach((inp) => {
    console.log(inp);
    inp.addEventListener("keydown", (e) => {
        if (e.key == "Delete") {
            e.preventDefault();
            inp.value = "";
        }
    })
});

console.log("-----------");
for (i of input_array) {
    console.log(i);
}