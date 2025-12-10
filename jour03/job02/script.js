function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

$(function () {

    const correct_rainbow = [];
    const solution_box = [];
    const loc = window.location.pathname;
    const url = window.location.href;
    console.log(url);

    const image_path = "assets/images/";

    //construction arc correct et slots des deux zones
    for (i = 1; i <= 6; i++) {
        correct_rainbow.push("arc" + i + ".png");
        // let jumble_div = `
        // <div id="j_slot`+ i + `" class="slot"></div>
        // `;
        let solution_div = `
        <div id="s_slot`+ i + `" class="slot"></div>
        `;
        // $("#jumble").append(jumble_div);
        // $("#s_slot" + i).droppable();
        $("#solution").append(solution_div);
    }

    console.log(correct_rainbow);

    const jumbled_rainbow = correct_rainbow.slice()
    shuffleArray(jumbled_rainbow);
    // console.log($("#jumble").children());

    for (i in jumbled_rainbow) {
        let jumble_div = `
        <div id="j_slot`+ i + `" class="slot"></div>
        `;
        let myimg = $(`<img>`);
        myimg.attr("src", image_path + jumbled_rainbow[i]);
        $("#jumble").append(jumble_div);
        myimg.appendTo("#j_slot" + i);
    }

    // let count = 1;
    // for (i of $("#jumble").children()) {
    //     console.log(i);
    //     // newimage = $('img').attr("scr", image_path + "arc" + count + ".png")
    //     // let myimg = `<img scr="` + image_path + `arc` + count + `.png" alt="">`;
    //     let myimg = $(`<img>`);
    //     myimg.attr("src", image_path + jumbled_rainbow[count - 1]);
    //     console.log(myimg);
    //     myimg.appendTo(i);
    //     count++;
    // }

});