
async function get_something() {
    const something = await fetch("./pokemon.json");
    response = await something.json();
    return response;
}
let a = await get_something();
console.log(a);