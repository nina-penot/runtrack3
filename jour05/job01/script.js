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

function is_email_ok(email) {
    //check if email
}

function is_pass_ok(pass) {
    //Must have at least one number, one maj, one min and one special char
    //Must be at least 8 char long
    if (pass.length < 8) {
        return false;
    }
}

function is_pcode_ok(pcode) {
    //Must only be numbers
    //Must have 5 numbers
}

//CODE----------------------

const email_input = doc_id_get("email"),
    pass_input = doc_id_get("password"),
    name_input = doc_id_get("name"),
    lastname_input = doc_id_get("lastname"),
    adress_input = doc_id_get("adress"),
    pcode_input = doc_id_get("pcode"),
    submit_btn = doc_id_get("submit");
