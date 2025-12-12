//FUNCTIONS-------------------------
function doc_id_get(id) {
    return document.getElementById(id);
}

function add_class(element, classes) {
    if (typeof classes == "string") {
        element.classList.add(classes);
    } else {
        for (cl of classes) {
            element.classList.add(cl);
        }
    }
}

//CODE----------------------

const email_input = doc_id_get("email"),
    pass_input = doc_id_get("password"),
    name_input = doc_id_get("name"),
    lastname_input = doc_id_get("lastname"),
    adress_input = doc_id_get("adress"),
    pcode_input = doc_id_get("pcode");

