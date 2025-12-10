const myjson = {
    name: "La Plateforme_",
    address: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: "11",
    creation: "2019"
};

function jsonValueKey(myjson, key) {
    return myjson[key];
}

// const linktojson = "https://pokeapi.co/api/v2/pokemon/ditto";

mytest = jsonValueKey(myjson, "name");

console.log(mytest);