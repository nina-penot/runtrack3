function compareNumbers(a, b) {
    return a - b;
}

function tri(numbers, order) {
    if (order == "asc") {
        return numbers.sort(compareNumbers);
    } else if (order == "desc") {
        let sorted = numbers.sort(compareNumbers);
        let sorted_len = sorted.length;
        let new_arr = [];
        for (n = sorted_len - 1; n >= 0; n--) {
            new_arr.push(sorted[n]);
        }
        return new_arr;
    }
}

let numbers = [3, 18, 1, 45, 0, 32, 5];
let asc = "asc";
let desc = "desc";

console.log(tri(numbers, desc));