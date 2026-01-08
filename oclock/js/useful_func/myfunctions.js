function make_nav_elem(link, name, id) {
    let myli = easy_quick_create("li", "nav-item", null, id);
    let mylink = easy_quick_create("a", "nav-link", name);
    if (link != null) {
        mylink.href = link;
    }
    myli.appendChild(mylink);
    return myli;
}