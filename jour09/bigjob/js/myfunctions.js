//------------------------------------------
// USER MANAGEMENT
//------------------------------------------

/**
 * Charge les utilisateurs dans le localstorage
 * @returns 
 */
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

/**
 * Vérifie si il s'agit d'un email
 * @param {*} email 
 * @returns 
 */
function verify_email(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Vérifie si l'email fait parti du domaine de la plateforme
 * @param {*} email 
 * @returns 
 */
function verify_plateforme(email) {
    return email.endsWith("@laplateforme.io");
}

/**
 * Vérifie si un email existe dans les données
 * @param {*} email 
 * @returns 
 */
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

/**
 * Vérifie si un mot de passe est correct lors de la connexion
 * @param {*} email 
 * @param {*} pass 
 * @returns 
 */
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

/**
 * Connecte un utilisateur.
 * @param {*} user 
 */
function connect(user) {
    sessionStorage.setItem("login", user);
}

function redirect(page) {
    window.location.href(page);
}

/**
 * Vérifie si connécté
 * @returns 
 */
function is_logged_in() {
    if (sessionStorage.getItem("login")) {
        return true;
    } else {
        return false;
    }
}

/**
 * Récupère le role de l'utilisateur
 * @param {*} user 
 */
function get_user_role(user) { }

/**
 * Vérifie si l'utilisateur est admin
 * @param {*} user 
 */
function is_user_admin(user) { }

/**
 * Vérifie si l'utilisateur est modérateur
 * @param {*} user 
 */
function is_user_mod(user) { }

/**
 * Enregistre un nouvel utilisateur.
 * 
 * @param {*} nom 
 * @param {*} prenom 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
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

/**
 * Déconnecte l'utilisateur
 */
function logout() {
    sessionStorage.removeItem("login");
}

/**
 * Vérifie qu'un nom n'a que des lettres, espaces ou tirets.
 * @param {*} name 
 * @returns 
 */
function verify_name(name) {
    const regex = /^[a-zA-Z\p{L}\s\- ]+$/u;
    return regex.test(name);
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
    if (errors != null) {
        // console.log(errors.length);
        // console.log(errors);
        if (errors.length > 1) {
            for (i = 0; i < errors.length; i++) {
                errors[i].remove();
            }
        } else {
            errors.remove();
        }
    }
}