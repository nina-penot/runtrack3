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
    cl = document.querySelectorAll(myclass);
    if (cl.length > 0) {
        if (cl.length <= 2) {
            return cl[0];
        } else {
            return cl;
        }
    } else {
        return null;
    }
}

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


/**
 * Find a specific child from a parent
 * @param {*} parent The parent to look into
 * @param {*} tagname Tagname of the child, use null for no tag search and get all children instead
 * @param {*} position Position of the wanted child
 * @returns single element || all children || null if empty
 */
function easy_find_child(parent, tagname = null, position = null) {
    parent = document.getElementById(parent);
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


// let test = {
//     "hu": 1,
//     "huo": 2,
// };
// console.log(Array.isArray(test));
