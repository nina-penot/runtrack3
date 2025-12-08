var myfooter = document.getElementById("foot"),
    doc = document.documentElement,
    body = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

//also possible to use :
// const {scrollTop, clientHeight, scrollHeight} = document.documentElement

// myfooter.addEventListener("scroll", function (e) {
//     console.log("hey!!");
// })
// console.log(doc);
// body.addEventListener("scroll", function (e) {
//     console.log("done");
// })

function scroller() {
    //Récupre le pourcentage en utilisant les propriétés "scrolltop" et "scrollheight"
    //de body et doc html
    var percent = (doc[st] || body[st]) / ((doc[sh] || body[sh]) - doc.clientHeight) * 100;
    // let colors_wanted = {
    //     0: "#000000",
    //     10: "#ff2c2c",
    //     20: "#ff7d2cff",
    //     30: "#ffed2cff",
    //     40: "#64ff2cff",
    //     50: "#2cff6bff",
    //     60: "#2ce3ffff",
    //     70: "#302cffff",
    //     80: "#d52cffff",
    //     90: "#ff2caeff",
    // }
    // myfooter.style.backgroundColor = "red";

    //Calcule le multiplicateur pour la valeur hue(h) de hsl
    //310 est choisie comme maximum (rose fushia) (0 est rouge)
    let mult = 310 / 100;
    //Construit la couleur en hsl
    let mycol = "hsl(" + percent * mult + ", 100%, 50%)";
    //Applique au footer
    myfooter.style.backgroundColor = mycol;
    // console.log(mycol);

    // for (i in colors_wanted) {
    //     if (percent >= i) {
    //         myfooter.style.backgroundColor = colors_wanted[i];
    //     }
    // }
    // console.log(percent);
}