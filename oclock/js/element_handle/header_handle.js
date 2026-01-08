//get the header
const header = easy_tag_get("header");

//build title
const title = easy_quick_create("div", "titleclass", "O'Clock");

//build nav menu
const nav = easy_quick_create("nav", "navclass");

const link1 = easy_quick_create("a", "linkclass"),
    link2 = easy_quick_create("a", "linkclass");

//append all to header