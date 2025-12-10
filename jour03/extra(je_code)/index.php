<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Demo 7 - Drag & Drop Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
        }

        h1 {
            color: #333;
            margin-bottom: 30px;
        }

        .instructions {
            background: #f0f0f0;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 30px;
            font-size: 16px;
        }

        .game-container {
            display: flex;
            justify-content: space-around;
            margin: 40px 0;
        }

        .drop-zones {
            display: flex;
            gap: 20px;
        }

        .drop-zone {
            width: 120px;
            height: 120px;
            border: 3px dashed #999;
            border-radius: 10px;
            background: #f9f9f9;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #666;
            transition: all 0.3s;
        }

        .drop-zone.ui-droppable-hover {
            background: #e8f5e9;
            border-color: #4caf50;
            transform: scale(1.05);
        }

        .drop-zone .label {
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 5px;
            color: #333;
        }

        .drop-zone .number {
            font-size: 36px;
            font-weight: bold;
            color: #2196f3;
        }

        .draggable-items {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .draggable {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #ff9a56 0%, #ff6a00 100%);
            color: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            font-weight: bold;
            cursor: move;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }

        .draggable:hover {
            transform: scale(1.1);
        }

        .draggable.ui-draggable-dragging {
            opacity: 0.7;
            transform: rotate(5deg);
        }

        .controls {
            margin-top: 40px;
        }

        #btnVerifier {
            background: #4caf50;
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 18px;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }

        #btnVerifier:hover {
            background: #45a049;
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        #btnReset {
            background: #2196f3;
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 18px;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
            margin-left: 10px;
        }

        #btnReset:hover {
            background: #1976d2;
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        .result {
            margin-top: 30px;
            font-size: 24px;
            font-weight: bold;
            min-height: 40px;
        }

        .result.success {
            color: #4caf50;
            animation: bounce 0.5s;
        }

        .result.error {
            color: #f44336;
            animation: shake 0.5s;
        }

        @keyframes bounce {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-20px);
            }
        }

        @keyframes shake {

            0%,
            100% {
                transform: translateX(0);
            }

            25% {
                transform: translateX(-10px);
            }

            75% {
                transform: translateX(10px);
            }
        }

        .drop-zone.filled {
            border-color: #4caf50;
            background: #e8f5e9;
        }
    </style>
</head>

<body>
    <h1>🎮 Jeu de Glisser-Déposer</h1>

    <div class="instructions">
        <strong>Instructions :</strong> Glissez chaque numéro dans la case correspondante (1→Case 1, 2→Case 2, etc.)
    </div>

    <div class="game-container">
        <div class="drop-zones">
            <div class="drop-zone" data-number="1">
                <div class="label">Case</div>
                <div class="number">1</div>
            </div>
            <div class="drop-zone" data-number="2">
                <div class="label">Case</div>
                <div class="number">2</div>
            </div>
            <div class="drop-zone" data-number="3">
                <div class="label">Case</div>
                <div class="number">3</div>
            </div>
            <div class="drop-zone" data-number="4">
                <div class="label">Case</div>
                <div class="number">4</div>
            </div>
        </div>
    </div>

    <div class="draggable-items" id="draggableContainer">
        <div class="draggable" data-number="1">1</div>
        <div class="draggable" data-number="2">2</div>
        <div class="draggable" data-number="3">3</div>
        <div class="draggable" data-number="4">4</div>
    </div>

    <div class="controls">
        <button id="btnVerifier">Vérifier</button>
        <button id="btnReset">Réinitialiser</button>
    </div>

    <div class="result" id="result"></div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="script.js"></script>
</body>

</html>