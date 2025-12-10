<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="./assets/css/mycss.css">
</head>

<body>
    <div class="float_left">

        <!-- Grille arc en ciel mélangé -->
        <div class="box float_left" id="jumble">


        </div>

        <!-- Grille construction arc-en-cien -->
        <div class="box float_left" id="solution">


        </div>

    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>
    <script src="script.js"></script>
    <script>
        $(function() {
            for (i of $("#jumble").children()) {
                child_img = $(i).find("img");
                $(child_img).draggable({
                    snap: i,
                    revert: "invalid",
                });
            }
            for (s of $("#solution").children()) {
                $(s).droppable({
                    accept: "img",
                    drop: function(ev, ui) {
                        let item = $(ui.draggable);
                        $(this).append(item);
                        $(item).css()
                    }
                });
            }
        });
    </script>
</body>