//------------------------------------------
// USER MANAGEMENT
//------------------------------------------

async function loadUsers() {
    try {
        const response = await fetch("data/users.json");
        const users = await response.json();
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

function verify_password(email, pass) {
    //get this users pass
}

function connect(user) {
    sessionStorage.setItem("login", user);
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

function register(name, lastname, email, pass) {
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

function logout() { }

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