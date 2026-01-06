if (!is_logged_in()) {
    redirect("index.html");
}

// load_requests();
// load_users();

const user = sessionStorage.getItem("login");
const request_table = easy_id_get("request_table");

if (is_user_admin(user) || is_user_mod(user)) {
    //access to demand confirmation
    //generate base table for requests
    const requests = JSON.parse(localStorage.getItem("requests"));

    const translate = {
        "pending": "en attente",
        "approved": "accéptée",
        "refused": "refusée"
    };

    for (i in requests) {
        let newtr = easy_quick_create("tr");
        let td1 = easy_quick_create("td", null, get_mail_from_id(requests[i].user_id)),
            td2 = easy_quick_create("td", null, requests[i].date),
            td3 = easy_quick_create("td", null, translate[requests[i].status]),
            td4 = easy_quick_create("td");

        easy_append_children(td4, create_request_buttons_group());
        easy_append_children(newtr, [td1, td2, td3, td4]);
        easy_append_children(request_table.tBodies[0], newtr);
    }
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
    const users = JSON.parse(localStorage.getItem("users"));
    for (i in users) {
        let thistr = easy_quick_create("tr"),
            td1 = easy_quick_create("td", null, users[i].email),
            td2 = easy_quick_create("td", null, users[i].role),
            td3 = easy_quick_create("td");

        easy_append_children(td3, create_role_buttons_group());
        easy_append_children(thistr, [td1, td2, td3]);
        easy_append_children(role_table.tBodies[0], thistr);
    }
}