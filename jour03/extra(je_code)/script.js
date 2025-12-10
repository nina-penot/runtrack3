$(function () {

    // Fonction pour mélanger les éléments draggable
    function shuffleDraggables() {
        const container = $('#draggableContainer');
        const items = container.children('.draggable').get();

        // Algorithme de Fisher-Yates pour mélanger
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }

        // Réorganiser dans le DOM
        container.empty();
        items.forEach(item => container.append(item));
    }

    // Initialiser le jeu
    function initGame() {
        // Mélanger les éléments
        shuffleDraggables();

        // Réinitialiser le résultat
        $('#result').text('').removeClass('success error');

        // Vider toutes les drop zones
        $('.drop-zone').removeClass('filled').each(function () {
            $(this).find('.draggable').remove();
        });

        // Rendre tous les draggables à nouveau draggable
        $('.draggable').draggable({
            revert: 'invalid',  // Retourne à la position d'origine si pas dans une zone valide
            containment: 'body',
            cursor: 'move',
            zIndex: 1000,
            start: function () {
                $(this).css('opacity', '0.7');
            },
            stop: function () {
                $(this).css('opacity', '1');
            }
        });
    }

    // Configurer les zones droppable
    $('.drop-zone').droppable({
        accept: '.draggable',
        tolerance: 'intersect',

        drop: function (event, ui) {
            const dropZone = $(this);
            const draggable = ui.draggable;

            // Si la zone contient déjà un élément, le renvoyer au container
            const existingItem = dropZone.find('.draggable');
            if (existingItem.length > 0) {
                $('#draggableContainer').append(existingItem);
                existingItem.css({
                    position: 'relative',
                    left: '0',
                    top: '0'
                });
            }

            // Placer le nouvel élément dans la zone
            dropZone.append(draggable);
            draggable.css({
                position: 'relative',
                left: '0',
                top: '0'
            });

            // Marquer la zone comme remplie
            dropZone.addClass('filled');

            // Réinitialiser le résultat
            $('#result').text('').removeClass('success error');
        },

        out: function (event, ui) {
            // Si l'élément est déplacé hors de la zone
            $(this).removeClass('filled');
        }
    });

    // Configurer le container des draggables comme droppable aussi
    $('#draggableContainer').droppable({
        accept: '.draggable',
        tolerance: 'intersect',

        drop: function (event, ui) {
            const draggable = ui.draggable;
            const parentZone = draggable.parent('.drop-zone');

            if (parentZone.length > 0) {
                parentZone.removeClass('filled');
            }

            // Replacer dans le container
            $(this).append(draggable);
            draggable.css({
                position: 'relative',
                left: '0',
                top: '0'
            });

            // Réinitialiser le résultat
            $('#result').text('').removeClass('success error');
        }
    });

    // Vérifier la solution
    $('#btnVerifier').on('click', function () {
        let isCorrect = true;
        let filledCount = 0;

        // Vérifier chaque zone
        $('.drop-zone').each(function () {
            const dropZone = $(this);
            const expectedNumber = dropZone.data('number');
            const draggable = dropZone.find('.draggable');

            if (draggable.length > 0) {
                filledCount++;
                const actualNumber = draggable.data('number');

                if (expectedNumber !== actualNumber) {
                    isCorrect = false;
                }
            }
        });

        const resultDiv = $('#result');

        // Vérifier si toutes les cases sont remplies
        if (filledCount !== 4) {
            resultDiv
                .text('⚠️ Toutes les cases doivent être remplies!')
                .removeClass('success')
                .addClass('error');
            return;
        }

        // Afficher le résultat
        if (isCorrect) {
            resultDiv
                .text('🎉 Bravo! Vous avez gagné!')
                .removeClass('error')
                .addClass('success');
        } else {
            resultDiv
                .text('❌ Perdu! Les numéros ne sont pas dans les bonnes cases.')
                .removeClass('success')
                .addClass('error');
        }
    });

    // Réinitialiser le jeu
    $('#btnReset').on('click', function () {
        initGame();
    });

    // Initialiser le jeu au chargement
    initGame();

});