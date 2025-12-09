$(function () {

    console.log($("#appear"));
    $('#appear').on('click', function () {
        $('#mytext').html("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");

        $('#mytext').fadeIn();
        if (!document.getElementById("remove")) {
            add_remove_button();
        } else {
            console.log("button already in");
            console.log($('#remove'));
        }

    });

    $(document).on('click', '#remove', function () {
        $('#mytext').html('');
        $(this).remove();
    });

    function add_remove_button() {
        const btn_remover = `
        <button id="remove">SUPPRIMER</button>
        `;
        $(btn_remover).insertBefore('#mytext');
        console.log($("#remove"));
    }

});