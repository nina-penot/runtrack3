function is_this_num_prime(num) {
    if (num <= 1) {
        return false;
    }

    let count = 0;

    for (n = 2; n < num; n++) {
        if (num % n == 0) {
            count++;
        }
    }

    if (count > 0) {
        return false;
    } else {
        return true;
    }
}

function sommenombrespremiers(n1, n2) {
    if (is_this_num_prime(n1) & is_this_num_prime(n2)) {
        return n1 + n2;
    } else {
        return false;
    }
}

console.log(sommenombrespremiers(6, 31));