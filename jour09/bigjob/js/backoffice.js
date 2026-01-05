if (!is_logged_in()) {
    redirect("index.html");
}

if (is_user_admin(user) || is_user_mod(user)) {
    //access to demand confirmation
} else if (is_user_admin(user)) {
    //access to role edit
} else {
    redirect("index.html");
}