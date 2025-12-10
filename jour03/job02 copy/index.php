<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="./assets/css/mycss.css">
</head>

<body>
    <div class="float_left">

        <!-- Grille arc en ciel mélangé -->
        <div class="box float_left" id="jumble">
            <div class="slot" data-number="1">
                <div class="draggable"><img src="./assets/images/arc1.png" alt="arc1"></div>
            </div>
            <div class="slot" data-number="2">
                <div class="draggable"><img src="./assets/images/arc2.png" alt="arc2"></div>
            </div>
            <div class="slot" data-number="3">
                <div class="draggable"><img src="./assets/images/arc3.png" alt="arc3"></div>
            </div>
            <div class="slot" data-number="4">
                <div class="draggable"><img src="./assets/images/arc4.png" alt="arc4"></div>
            </div>
            <div class="slot" data-number="5">
                <div class="draggable"><img src="./assets/images/arc5.png" alt="arc5"></div>
            </div>
            <div class="slot" data-number="6">
                <div class="draggable"><img src="./assets/images/arc6.png" alt="arc6"></div>
            </div>
        </div>

        <!-- Grille construction arc-en-cien -->
        <div class="box float_left" id="solution">
            <div class="slot" data-number="1"></div>
            <div class="slot" data-number="2"></div>
            <div class="slot" data-number="3"></div>
            <div class="slot" data-number="4"></div>
            <div class="slot" data-number="5"></div>
            <div class="slot" data-number="6"></div>
        </div>

    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>
    <script src="script.js"></script>
</body>