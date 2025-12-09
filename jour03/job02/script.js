$(function () {

    const correct_rainbow = [];
    const loc = window.location.pathname;
    const url = window.location.href;
    console.log(url);

    const image_path = "assets/images/";

    //construction arc correct et slots des deux zones
    for (i = 1; i <= 6; i++) {
        correct_rainbow.push("arc" + i + ".png");
        let jumble_div = `
        <div id="j_slot`+ i + `" class="slot"></div>
        `;
        let solution_div = `
        <div id="s_slot`+ i + `" class="slot"></div>
        `;
        $("#jumble").append(jumble_div);
        $("#solution").append(solution_div);
    }

    console.log($("#jumble").children());

    let count = 1;
    for (i of $("#jumble").children()) {
        console.log(i);
        // newimage = $('img').attr("scr", image_path + "arc" + count + ".png")
        // let myimg = `<img scr="` + image_path + `arc` + count + `.png" alt="">`;
        let myimg = $(`<img>`);
        myimg.attr("src", url + image_path + "arc" + count + ".png");
        console.log(myimg);
        myimg.appendTo(i);
        count++;
    }

    // for ([a, b] of Object.entries(fruits)) {
    //     console.log(a + " : " + b);
    // }

    // for ([a, b] of panier.entries()) {
    //     console.log(a + " : " + b);
    // }

});