//-----------------------------
//EXTRA FUNCTIONS
//-----------------------------

function first_uppercase(str) {
    capital = str[0].toUpperCase();
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
            for (n of pkmn_names) {
                if (n.includes(name)) {
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
                "name": json[num]["name"]["english"],
                "type": json[num]["type"]
            }
        }
    }

    return search_ok;
}

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
async function do_things() {
    //my data
    const pkmn = await get_pkmn_data();
    const types = await get_types_data();

    //build type selector
    const types_exceptions = ["unknown", "stellar"];

    for (i of types.results) {
        if (!types_exceptions.includes(i.name)) {
            let myoption = document.createElement("option");
            myoption.value = i.name;
            myoption.textContent = first_uppercase(i.name);
            type_selection.appendChild(myoption);
        }
    }

    console.log(search(pkmn, "", "", "Grass"));
    //NOTE: only the name search left
    //error regarding the fact it's an object, not an array
}

do_things();