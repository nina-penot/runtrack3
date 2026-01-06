//------------------------------------------
// USER MANAGEMENT
//------------------------------------------

/**
 * Charge les utilisateurs dans le localstorage
 * @returns 
 */
async function load_users() {
    try {
        const response = await fetch("data/users.json");
        const users = await response.json();
        // Sauvegarde
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(users));
        };
        return users;
    } catch (error) {
        console.error("Erreur de chargement:", error);
        return [];
    }
}

async function load_requests() {
    try {
        const response = await fetch("data/requests.json");
        const requests = await response.json();
        // Sauvegarde
        if (!localStorage.getItem("requests")) {
            console.log("generating...");
            localStorage.setItem("requests", JSON.stringify(requests));
        };
        return requests;
    } catch {
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
    const users = JSON.parse(localStorage.getItem("users"));
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
    window.location.href = page;
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
function get_user_role(user) {
    //search user from email
    const users = JSON.parse(localStorage.getItem("users"));
    const myuser = users.find(u => u.email === user);
    //return this users role
    return myuser.role;
}

/**
 * Vérifie si l'utilisateur est admin
 * @param {*} user 
 */
function is_user_admin(user) {
    //search user from email
    const users = JSON.parse(localStorage.getItem("users"));
    const myuser = users.find(u => u.email === user);
    //get this users role
    const role = myuser.role;
    //compare to the pass
    if (role == "admin") {
        //return true if admin
        return true;
    } else {
        return false;
    }
}

/**
 * Vérifie si l'utilisateur est modérateur
 * @param {*} user 
 */
function is_user_mod(user) {
    //search user from email
    const users = JSON.parse(localStorage.getItem("users"));
    const myuser = users.find(u => u.email === user);
    //get this users role
    const role = myuser.role;
    //compare to the pass
    if (role == "mod") {
        //return true if admin
        return true;
    } else {
        return false;
    }
}

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

function save_request(email, mydate) {
    // Création de l'utilisateur
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!users) {
        load_users();
    }

    const myuser = users.find(u => u.email === email);

    const new_request = {
        id: Date.now(),
        user_id: myuser.id,
        date: mydate,
        status: "pending"
    };

    requests.push(new_request);
    localStorage.setItem("requests", JSON.stringify(requests));
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

function is_pass_safe(password) {
    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumbers = /\d/.test(password);
    let hasNonalphas = /\W/.test(password);

    if (hasLowerCase & hasUpperCase & hasNumbers & hasNonalphas & password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

function change_user_role(user, newrole) {
    //search user from email
    const users = JSON.parse(localStorage.getItem("users"));
    const myuser = users.find(u => u.email === user);
    const myuser_index = users.findIndex(u => u.email === user);
    //change this users role
    myuser.role = newrole;
    users[myuser_index] = myuser;
    localStorage.setItem("users", JSON.stringify(users));
}

function change_request_status(userid, newstatus) {
    //search user from email
    const requests = JSON.parse(localStorage.getItem("requests"));
    const myrequest = requests.find(u => u.user_id === userid);
    const myrequ_index = requests.findIndex(u => u.user_id === userid);
    //change this users role
    myrequest.status = newstatus;
    requests[myrequ_index] = myrequest;
    localStorage.setItem("requests", JSON.stringify(requests));
}

function get_mail_from_id(userid) {
    const users = JSON.parse(localStorage.getItem("users"));
    const myuser = users.find(u => u.id === userid);
    return myuser.email;
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
    if (link != null) {
        mylink.href = link;
    }
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

function show_success(elem_before, success_message) {
    let mysuccess = easy_quick_create("div", "success", success_message);
    elem_before.after(mysuccess);
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

function create_role_table() {
    let newtable = easy_quick_create("table", ["table", "table-striped", "mt-4"], null, "role_table");
    let title1 = easy_quick_create("th", null, "Utilisateur"),
        title2 = easy_quick_create("th", null, "Role"),
        title3 = easy_quick_create("th", null, "Toggle");
    easy_append_children(newtable, easy_quick_create("thead"));
    easy_append_children(newtable, easy_quick_create("tbody"));
    easy_append_children(newtable.tHead, [title1, title2, title3]);
    return newtable;
}

function create_role_buttons_group() {

    let group = easy_quick_create("div", "btn-group"),
        btn1 = easy_quick_create("button", ["btn", "btn-primary"], "User"),
        btn2 = easy_quick_create("button", ["btn", "btn-primary"], "Mod"),
        btn3 = easy_quick_create("button", ["btn", "btn-primary"], "Admin");

    btn1.addEventListener("click", (e) => {
        //get user from parent
        let parent = group.parentElement.parentElement;
        let usermail = parent.firstChild.textContent;
        let user_role = parent.children[1];
        //change user to user role
        change_user_role(usermail, "user");
        //update table role section
        user_role.textContent = get_user_role(usermail);
    });

    btn2.addEventListener("click", (e) => {
        //get user from parent
        let parent = group.parentElement.parentElement;
        let usermail = parent.firstChild.textContent;
        let user_role = parent.children[1];
        //change user to mod role
        change_user_role(usermail, "mod");
        //update table role section
        user_role.textContent = get_user_role(usermail);
    });

    btn3.addEventListener("click", (e) => {
        //get user from parent
        let parent = group.parentElement.parentElement;
        let usermail = parent.firstChild.textContent;
        let user_role = parent.children[1];
        //change user to admin role
        change_user_role(usermail, "admin");
        //update table role section
        user_role.textContent = get_user_role(usermail);
    });

    easy_append_children(group, [btn1, btn2, btn3]);

    return group;
}

function create_request_buttons_group() {
    let group = easy_quick_create("div", "btn-group"),
        btn1 = easy_quick_create("button", ["btn", "btn-success"], "Accept"),
        btn2 = easy_quick_create("button", ["btn", "btn-danger"], "Refuse");

    btn1.addEventListener("click", (e) => {
        //get parent td
        let parent = group.parentElement;
        let status = parent.parentElement.children[2];
        console.log(status);
        //accept request
        change_request_status(userid, "accepted");
        //replace content of parent td with "accepted"
        status.textContent = "acceptée";
        //remove the buttons
        parent.innerHTML = "";
        parent.textContent = "-";
    });

    btn2.addEventListener("click", (e) => {
        //get parent td
        let parent = group.parentElement;
        let status = parent.parentElement.children[2];
        console.log(status);
        //refuse request
        change_request_status(userid, "refused");
        //replace content of parent td with "accepted"
        status.textContent = "refusé";
        //remove the buttons
        parent.innerHTML = "";
        parent.textContent = "-";
    });

    easy_append_children(group, [btn1, btn2]);
    return group;
}