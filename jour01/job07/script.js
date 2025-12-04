function jourtravaille(date) {
    let jour_arr = {
        0: "Dimanche",
        1: "Lundi",
        2: "Mardi",
        3: "Mercredi",
        4: "Jeudi",
        5: "Vendredi",
        6: "Samedi"
    };

    let mois_arr = {
        0: "Janvier",
        1: "Février",
        2: "Mars",
        3: "Avril",
        4: "Mai",
        5: "Juin",
        6: "Juillet",
        7: "Août",
        8: "Septembre",
        9: "Octobre",
        10: "Novembre",
        11: "Décembre"
    };

    let n_date = date.getDate();
    let jour = date.getDay();
    let jour_str = jour_arr[jour];
    let mois = date.getMonth();
    let mois_str = mois_arr[mois];
    let annee = date.getFullYear();

    //jours fériés
    let ferie_arr = {
        "Nouvel An": { "jour": 1, "mois": 0 },
        "Noël": { "jour": 25, "mois": 11 },
        "Fête Nationale": { "jour": 14, "mois": 6 },
        "Fête du Travail": { "jour": 1, "mois": 4 }
    };

    let ferie_check = false;

    for (let i in ferie_arr) {
        if (ferie_arr[i]["jour"] == n_date & ferie_arr[i]["mois"] == mois) {
            console.log("Le " + n_date + " " + jour_str + " " + mois_str + " " + annee +
                " est un jour férié, c'est " + i + "!");
            ferie_check = true;
            break;
        }
    }

    //si weekend ou jour semaine
    //il est aussi possible d'utilser une variable dans un str avec:
    // 'Voici myvar: ${myvar}.'
    if (ferie_check == false) {
        if (jour != 0 & jour != 6) {
            console.log("Oui, " + jour_str + " " + n_date + " " + mois_str + " " + annee + " est un jour travaillé.");
        } else {
            console.log("Non, " + jour_str + " " + n_date + " " + mois_str + " " + annee + " est un week-end.")
        }
    }

}

let date = new Date(2020, 0, 1);

jourtravaille(date);