//------------------------------------------
// USER MANAGEMENT
//------------------------------------------

async function loadUsers() {
    try {
        const response = await fetch("data/users.json");
        const users = await response.json();
        // Sauvegarde
        localStorage.setItem("users", JSON.stringify(users));
        return users;
    } catch (error) {
        console.error("Erreur de chargement:", error);
        return [];
    }
}

function verify_email(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function verify_plateforme(email) {
    return email.endsWith("@laplateforme.io");
}

function does_email_exists(email) {
    //search for this email in json
    const users = JSON.parse(localStorage.getItem("users"));
    //if email exists return true
    if (users.find(u => u.email === email)) {
        return true;
    } else {
        return false;
    }
}

function verify_password(email, pass) {
    //search user from email
    const myuser = users.find(u => u.email === email);
    //get this users pass
    const myuserpass = myuser.password;
    //compare to the pass
    if (myuserpass == pass) {
        //return true if same
        return true;
    } else {
        return false;
    }
}

function connect(user) {
    sessionStorage.setItem("login", user);
}

function redirect(page) {
    window.location.href(page);
}

function is_logged_in() {
    if (sessionStorage.getItem("login")) {
        return true;
    } else {
        return false;
    }
}

function get_user_role(user) { }

function is_user_admin(user) { }

function is_user_mod(user) { }

function register(nom, prenom, email, password) {
    // Validation de l'email
    if (!verify_plateforme(email)) {
        return { success: false, message: "Email invalide" };
    }
    // Création de l'utilisateur
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
        id: Date.now(),
        email, password, nom, prenom,
        role: "user"
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
}

function logout() {
    sessionStorage.removeItem("login");
}

//------------------------------------------
// CALENDAR
//------------------------------------------

function is_past_date(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
}

//------------------------------------------
// ELEMENTS
//------------------------------------------

function make_nav_elem(link, name, id) {
    let myli = easy_quick_create("li", "nav-item", null, id);
    let mylink = easy_quick_create("a", "nav-link", name);
    mylink.href = link;
    myli.appendChild(mylink);
    return myli;
}

function clear_children(element) {
    element.innerHTML = "";
}

function show_error(elem_before, error_message) {
    let myerror = easy_quick_create("div", "error", error_message);
    elem_before.after(myerror);
}

function clear_errors() {
    let errors = easy_class_get("error");
    if (is_array(errors)) {
        for (i in errors) {
            errors[i].remove();
        }
    } else {
        errors.remove();
    }
}