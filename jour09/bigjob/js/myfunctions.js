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
    //if email exists return true
}

function verify_password(email, pass) {
    //search user from email
    //get this users pass
    //compare to the pass
    //return true if same
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