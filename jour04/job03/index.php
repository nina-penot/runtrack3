<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/mycss.css">
</head>

<body>
    <form method="get" id="search_form">
        <div>Rechercher id</div>
        <input type="text" name="id" id="id">
        <div>Rechercher nom</div>
        <input type="text" name="name" id="name">
        <div>Rechercher type</div>
        <select name="type" id="type">
            <option value="">??</option>
        </select>
        <button id="button">RECHERCHER</button>
    </form>

    <div class="result_container float_left" id="result"></div>

    <!-- card example -->
    <!-- <div class="card">
        <div class="card_title float_left">
            <div>#20</div>
            <div>Roucarnageionto</div>
        </div>

        <img class="card_image clear_flex" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="pkmnname">

        <div class="card_type_cont float_left">
            <div class="card_type">type1</div>
            <div class="card_type">type2</div>
        </div>

        <table class="card_stats_table">
            <tr>
                <td>HP</td>
                <td>16</td>
                <td>Sp.Atk</td>
                <td>7</td>
            </tr>
            <tr>
                <td>Atk</td>
                <td>10</td>
                <td>Sp.Def</td>
                <td>39</td>
            </tr>
            <tr>
                <td>Def</td>
                <td>30</td>
                <td>Speed</td>
                <td>67</td>
            </tr>
        </table>

    </div> -->
    <!-- SCRIPT -->
    <script src="./script.js"></script>
</body>