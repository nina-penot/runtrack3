function compareNumbers(a, b) {
    return a - b;
}

function compareNumbers2(a, b) {
    return b - a;
}

function tri(numbers, order) {
    if (order == "asc") {
        return numbers.sort(compareNumbers);
    } else if (order == "desc") {
        return numbers.sort(compareNumbers2);
    }
}

let numbers = [3, 18, 1, 45, 0, 32, 5];
let asc = "asc";
let desc = "desc";

console.log(tri(numbers, desc));