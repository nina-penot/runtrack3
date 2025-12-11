//-----------------------------
//EXTRA FUNCTIONS
//-----------------------------

function first_uppercase(str) {
    // console.log(str);
    if (typeof str != "undefined") {
        let capital = str[0].toUpperCase();
        new_str = "";
        for (i in str) {
            if (i == 0) {
                new_str += capital;
            } else {
                new_str += str[i];
            }
        }
        return new_str;
    }
}

function are_same_str(str1, str2) {
    let lower1 = str1.toLowerCase();
    let lower2 = str2.toLowerCase();
    if (lower1 == lower2) {
        return true;
    } else {
        return false;
    }
}

/**
 * Function that makes the strings lowercase and checks if one string is inside
 * the other
 * 
 * @param {string} haystack The string that will be the container
 * @param {string} needle The part we want to check is part of haystack
 * @returns true|false
 */
function str_contains(haystack, needle) {
    let hay_small = haystack.toLowerCase();
    let needle_small = needle.toLowerCase();
    if (hay_small.includes(needle_small)) {
        return true;
    } else {
        return false;
    }
}

function search(json, id = "", name = "", type = "") {
    let search_ok = {}

    for (num in json) {
        // console.log(json[num]["type"]);
        let found = {
            "id": false,
            "name": false,
            "type": false
        };

        let pkmn_id = json[num]["id"];
        let pkmn_names = json[num]["name"];
        let pkmn_types = json[num]["type"];

        //check id
        if (id != "") {
            if (pkmn_id == id) {
                found["id"] = true;
            }
        } else {
            found["id"] = true;
        }

        //check name
        if (name != "") {
            for (n in pkmn_names) {
                // let lowered_data = pkmn_names[n].toLowerCase();
                // let lowered_search = name.toLowerCase();
                if (str_contains(pkmn_names[n], name)) {
                    found["name"] = true;
                    break;
                }
            }
        } else {
            found["name"] = true;
        }

        //check types
        if (type != "") {
            if (pkmn_types.includes(type)) {
                found["type"] = true;
            }
        } else {
            found["type"] = true;
        }

        if (id == "" & name == "" & type == "") {
            found = {
                "id": false,
                "name": false,
                "type": false
            };
        }

        if (found["id"] & found["name"] & found["type"]) {
            search_ok[json[num]["id"]] = {
                "name": json[num]["name"],
                "type": json[num]["type"]
            }
        }
    }

    return search_ok;
}

function clear_children(parent) {
    parent.innerHTML = "";
}

function make_pokemon_card(id, names, types) { }

//-----------------------------

const types_url = "https://pokeapi.co/api/v2/type";
const main_pkmn_file_path = "./pokemon.json";

//-----------------------------
//ASYNCS
//-----------------------------

async function get_pkmn_data() {
    const something = await fetch(main_pkmn_file_path);
    const response = await something.json();
    return response;
}

async function get_types_data() {
    const s = await fetch(types_url);
    const r = await s.json();
    return r;
}

const type_selection = document.querySelector("select");
const name_search = document.getElementById("name");
const id_search = document.getElementById("id");
const result_box = document.getElementById("result");
// type_selection.addEventListener("input", (e) => {
//     console.log(type_selection.value);
// })

async function do_things() {
    //my data
    const pkmn = await get_pkmn_data();
    const types = await get_types_data();

    //build type selector
    const types_exceptions = ["unknown", "stellar"];

    for (i of types.results) {
        if (!types_exceptions.includes(i.name)) {
            let myoption = document.createElement("option");
            let majup = first_uppercase(i.name);
            myoption.value = majup;
            myoption.textContent = majup;
            type_selection.appendChild(myoption);
        }
    }

    const mybutton = document.getElementById("button");
    mybutton.addEventListener("click", (e) => {
        e.preventDefault();
        let search_type = type_selection.value;
        let search_name = name_search.value;
        let search_id = id_search.value;
        if (!search_type & !search_id & !search_name) {
            console.log("No search!");
        } else {
            let search_result = search(pkmn, search_id, search_name, search_type);
            if (Object.keys(search_result).length > 0) {
                console.log(search(pkmn, search_id, search_name, search_type));
            } else {
                console.log("No element corresponds to this search.");
            }
        }
    })
}

do_things();
console.log(window.location.search);