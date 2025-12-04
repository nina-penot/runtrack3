function afficherjourssemaines() {
    let jours = [
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
        "dimanche"
    ];
    let jours_length = jours.length;
    for (n = 0; n < jours_length; n++) {
        console.log(jours[n]);
    }
}

afficherjourssemaines();