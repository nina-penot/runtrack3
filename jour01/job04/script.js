function bisextile(annee) {
    if (annee % 4 == 0 || annee % 400 == 0) {
        if (annee % 100 == 0 & annee % 400 != 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

console.log(bisextile(2004));