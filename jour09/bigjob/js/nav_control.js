//if logged in:
//show deconnexion, hide connexion/inscription
//show calendrier
//if mod/admin show backoffice, else keep hidden

//else:
//show connexion/inscription, hide deconnexion
//hide calendrier, backoffice

const nav_main = easy_id_get("navmenu"),
    nav_conn = make_nav_elem("connexion.html", "Connexion", "connexion"),
    nav_insc = make_nav_elem("inscription.html", "Inscription", "inscription"),
    nav_deconn = make_nav_elem("", "Deconnexion", "deconnexion"),
    nav_backoffice = make_nav_elem("backoffice.html", "Backoffice", "backoffice"),
    nav_calendar = make_nav_elem("calendrier.html", "Calendrier", "calendrier");

if (is_logged_in()) {
    clear_children(nav_main);
    easy_append_children(nav_main, [nav_deconn, nav_calendar]);
} else {
    clear_children(nav_main);
    easy_append_children(nav_main, [nav_insc, nav_conn]);
}