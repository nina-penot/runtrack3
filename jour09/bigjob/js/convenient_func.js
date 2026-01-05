//---------------------------------------------------
// Shorter write
//---------------------------------------------------

function is_array(x) {
    if (Array.isArray(x)) {
        return true;
    } else {
        return false;
    }
}

function getmax(a, b) {
    return Math.max(a, b);
}

function getmin(a, b) {
    return Math.min(a, b);
}

function get_max_from_arr(arr) {
    return arr.reduce(getmax);
}

function get_min_from_arr(arr) {
    return arr.reduce(getmin);
}

function pythagoras(a, b) {
    return Math.sqrt(a * a + b * b);
}

function get_distance(elem1, elem2) { }

function get_distance_from_center(elem1, elem2) { }

/**
 * Returns key from object with highest value
 * @param {*} obj 
 * @returns 
 */
function get_max_from_obj(obj) {
    return Object.keys(obj).reduce(function (a, b) { return obj[a] > obj[b] ? a : b });
}

/**
 * Returns key from object with lowest value
 * @param {*} obj 
 * @returns 
 */
function get_min_from_obj(obj) {
    return Object.keys(obj).reduce(function (a, b) { return obj[a] < obj[b] ? a : b });
}

function closest_from_center(elem, arr_of_elems) {
    //needs an array check in case there's only one?
    //needs to use bounding box to get the position of the center of all elements
    //then get x distance and y distance
    //then use it to decide which elem of the array is closest to main element
    //use pythagoras
    let elem_bounds = elem.getBoundingClientRect();
    let elem_center_x = elem_bounds.x + (elem_bounds.width / 2);
    let elem_center_y = elem_bounds.y + (elem_bounds.height / 2);
    let distances = {}
    for (e = 0; e < arr_of_elems.length; e++) {
        let test_bounds = arr_of_elems[e].getBoundingClientRect();
        let test_center_x = test_bounds.x + (test_bounds.width / 2);
        let test_center_y = test_bounds.y + (test_bounds.height / 2);
        let x_dist = test_center_x - elem_center_x;
        let y_dist = test_center_y - elem_center_y;
        //don't forget to convert to positives if negative (>0)
        if (x_dist < 0) {
            x_dist = x_dist * -1;
        }
        if (y_dist < 0) {
            y_dist = y_dist * -1;
        }
        distances[e] = pythagoras(x_dist, y_dist);
    }
    console.log(distances);

    return get_min_from_obj(distances);
}

//---------------------------------------------------
// Select elements
//---------------------------------------------------

/**
 * Easier way to just document.getElementById.
 * @param {*} id Id of the element to get
 * @returns The element, or null if it doesn't exist
 */
function easy_id_get(id) {
    return document.getElementById(id);
}

/**
 * Easier query selector all. Gets all the element with class.
 * @param {*} myclass Class wanted
 * @returns array of elements or null if no element of that class exists.
 */
function easy_class_get(myclass) {
    if (myclass[0] != ".") {
        myclass = "." + myclass;
    }

    cl = document.querySelectorAll(myclass);
    if (cl.length > 0) {
        if (cl.length == 1) {
            return cl[0];
        } else {
            return cl;
        }
    } else {
        return null;
    }
}

/**
 * Get a list of every elements of a certain tag.
 * @param {*} tag The tag (examples: "div", "p", "main"...)
 * @returns tag list (or single element if only one found), or null if none found
 */
function easy_tag_get(tag) {
    cl = document.querySelectorAll(tag);
    if (cl.length > 0) {
        if (cl.length == 1) {
            return cl[0];
        } else {
            return cl;
        }
    } else {
        return null;
    }
}

/**
 * The big query getter function. A better querySelectorAll. Allows you to select things
 * in your document. It can get you either an array if multiple elements, or a single element
 * if only one was found.
 * You can use the mode to simply type in the query without thinking about symbols to add
 * before (no need to use "." before class for example provide "class" mode is used).
 * If none is found, it returns null. This function uses other "easy" type functions.
 * @param {*} query The query for what needs to be selected
 * @param {*} mode The mode, can be either: "id", "class", or "tag"
 * @returns Elements or null
 */
function easy_query_get(query, mode = null) {
    const mode_get = {
        "id": easy_id_get(query),
        "class": easy_class_get(query),
        "tag": easy_tag_get(query),
    }
    if (mode != null) {
        return mode_get[mode];
    } else {
        let queryget = document.querySelectorAll(query);
        if (queryget.length != 0) {
            if (queryget.length == 1) {
                return queryget[0];
            } else {
                return queryget;
            }
        } else {
            return null;
        }
    }
}

/**
 * Find a specific child from a parent
 * @param {*} parent The parent to look into (must be an html element)
 * @param {*} tagname Tagname of the child, use null for no tag search and get all children instead
 * @param {*} position Position of the wanted child
 * @returns single element || all children || null if empty
 */
function easy_find_child(parent, tagname = null, position = null) {
    // parent = document.getElementById(parent);
    let descendants = null;
    if (tagname != null) {
        descendants = parent.getElementsByTagName(tagname);
    } else {
        descendants = parent.getElementsByTagName("*");
    }

    if (descendants.length) {
        if (position != null) {
            return descendants[position];
        } else {
            return descendants;
        }
    }
    return null;
}

//---------------------------------------------------
// Add/create elements
//---------------------------------------------------

/**
 * Convenient element creation.
 * Make a tag then add classes or textcontent if wanted.
 * 
 * @param {*} tag_type The tag type to create.
 * @param {*} classtoadd (optional) Class to add. Can be multiple class if in an array. 
 * Use null for no class.
 * @param {*} textcontent (optional) Text to add. Use null for no text.
 * @param {*} id (optional) Adds an id, use null to not add.
 * @returns The created element
 */
function easy_quick_create(tag_type, classtoadd = null, textcontent = null, id = null) {
    let new_el = document.createElement(tag_type);

    if (classtoadd != null) {
        if (typeof classtoadd == "string") {
            new_el.classList.add(classtoadd);
        } else if (Array.isArray(classtoadd)) {
            for (cl of classtoadd) {
                new_el.classList.add(cl)
            }
        }
    }

    if (textcontent != null) {
        new_el.textContent = textcontent;
    }

    if (id != null) {
        new_el.id = id;
    }

    return new_el;
}

/**
 * Quickly adds a child or multiple children to a parent element.
 * @param {*} parent The parent element
 * @param {*} children Child or Children to append to the parent.
 */
function easy_append_children(parent, children) {
    if (Array.isArray(children)) {
        for (ch of children) {
            parent.appendChild(ch);
        }
    } else {
        parent.appendChild(children);
    }
}

//---------------------------------------------------
// Add functionality to elements
//---------------------------------------------------

/**
 * Makes an element a draggable element. REQUIRES the element to have an id!
 * @param {*} elem Element to make draggable
 */
function easy_drag_item(elem) {
    elem.draggable = true;
    elem.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id);
        // elem.style.opacity = 1;
        elem.classList.add("dragging");
        console.log(e.target.id);
    })
    // elem.addEventListener("drag", (e) => {
    //     elem.style.opacity = 1;
    // })
    elem.addEventListener("dragend", (e) => {
        // elem.style.opacity = 1;
        elem.classList.remove("dragging");
    })
}

/**
 * Makes a slot that can accept drag items. The drag items NEED AN ID!
 * 
 * Styling format: "background-color:color;other-criteria:criteria;...".
 * @param {*} elem Element to make a slot
 */
function easy_drag_slot(elem, styling = null) {
    elem.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (styling != null) {
            elem.setAttribute("style", styling);
        }
    })
    if (styling != null) {
        elem.addEventListener("dragleave", (e) => {
            elem.removeAttribute("style", styling);
        })
        elem.addEventListener("dragend", (e) => {
            elem.removeAttribute("style", styling);
        })
    }

    elem.addEventListener("drop", (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        console.log("data = ");
        console.log(data);
        console.log("drop e = ");
        console.log(e);
        e.target.appendChild(document.getElementById(data));
    })
}

/**
 * Makes an element a mouse free drag element. Allows the element to be dragged around
 * wherever in the page.
 * 
 * Also makes it bound to the page size, so it cannot go outside the bounding
 * of the page. Works also on page resizing.
 * 
 * @param {*} item The element that will become a mouse free element
 */
function easy_drag_item_mouse_free(item) {
    let startX = 0, startY = 0, newX = 0, newY = 0;

    function mousemove(d_e) {
        let w_height = window.innerHeight, w_width = window.innerWidth;
        newX = startX - d_e.clientX;
        newY = startY - d_e.clientY;

        startX = d_e.clientX;
        startY = d_e.clientY;

        item.style.top = (item.offsetTop - newY) + 'px';
        item.style.left = (item.offsetLeft - newX) + 'px';

        if (item.offsetTop - newY < 0) {
            item.style.top = 0 + "px";
        } else if (item.offsetTop - newY + item.clientHeight > w_height) {
            item.style.top = w_height - item.clientHeight + "px";
        }
        if (item.offsetLeft - newX < 0) {
            item.style.left = 0 + "px";
        } else if (item.offsetLeft - newX + item.clientWidth > w_width) {
            item.style.left = w_width - item.clientWidth + "px";
        }

        // gets all elements being in position of a single x y point
        // let ignored_behind = ["body", "html", item];
        // let behind = document.elementsFromPoint(item.offsetLeft - newX, item.offsetTop - newY);
        // let clean_behind = [];
        // for (b in behind) {
        //     if (ignored_behind.includes(behind[b].localName) || ignored_behind.includes(behind[b])) {
        //         // console.log(behind[b]);
        //         // behind.splice(b, 1);
        //     } else {
        //         clean_behind.push(behind[b]);
        //     }
        // }

        console.log({ newX, newY });
        console.log({ startX, startY });
    }

    window.addEventListener("resize", (a) => {
        const current_h = a.target.innerHeight;
        const current_w = a.target.innerWidth;

        if (item.offsetTop < 0) {
            item.style.top = 0 + "px";
        } else if (item.offsetTop + item.clientHeight > current_h) {
            item.style.top = current_h - item.clientHeight + "px";
        }
        if (item.offsetLeft < 0) {
            item.style.left = 0 + "px";
        } else if (item.offsetLeft + item.clientWidth > current_w) {
            item.style.left = current_w - item.clientWidth + "px";
        }

    });

    item.addEventListener("mousedown", (e) => {
        //may need to be position fixed, needs some testing
        item.style.position = "absolute";
        startX = e.clientX;
        startY = e.clientY;
        //follow mouse position
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", (e) => {
            document.removeEventListener("mousemove", mousemove);
        });
    });
    // item.addEventListener("mouseup", (e) => {
    //     //drops the element at mouse position
    // })
}

function easy_remove_all_events(item) {
    item.replaceWith(item.cloneNode(true));
}

//NOTE: may need to revise that in case an object has a position part of og style as to not destroy that
//Might need to make this independant from mouse free function
/**
 * 
 * @param {*} item 
 */
function easy_drag_item_mouse_limited(item) {
    easy_drag_item_mouse_free(item);
    item.addEventListener("mouseup", (e) => {
        item.style = "";
        item.style.position = "";
    })
}

function easy_collide_check(elem1, elem2) {
    elem1_b = elem1.getBoundingClientRect();
    elem2_b = elem2.getBoundingClientRect();

    return !(
        ((elem1_b.y + elem1_b.height) < (elem2_b.y)) ||
        (elem1_b.y > (elem2_b.y + elem2_b.height)) ||
        ((elem1_b.x + elem1_b.width) < elem2_b.x) ||
        (elem1_b.x > (elem2_b.x + elem2_b.width))
    );
}