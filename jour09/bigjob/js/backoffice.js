if (!is_logged_in()) {
    redirect("index.html");
}

// load_requests();
// load_users();

const user = sessionStorage.getItem("login");

if (is_user_admin(user) || is_user_mod(user)) {
    //access to demand confirmation
    //generate base table for requests
    const requests = JSON.parse(localStorage.getItem("requests"));
    // for (i in requests) {
    //     console.log(requests[i]);
    // }
} else {
    //if neither admin or mod, get redirected away
    redirect("index.html");
}

if (is_user_admin(user)) {
    //access to role edit
    //generate extra table for admin of every users and their role + button toggles
    const role_table = create_role_table();
    const maincontent = easy_tag_get("main");
    easy_append_children(maincontent, role_table);
}