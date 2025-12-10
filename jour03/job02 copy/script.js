$(function () {
    function shuffle_array(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const correct_rainbow = [];
    const shuffled_rainbow = [];
    for (i = 1; i <= 6; i++) {
        correct_rainbow.push(i);
        shuffled_rainbow.push(i);
    }

    shuffle_array(shuffled_rainbow);
    console.log(shuffled_rainbow);

});