<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <title>Document</title>
</head>

<body>
    <header class="bg-sky-500 p-3">
        <div class="flex">
            <div class="inline-block bg-amber-400 p-5 rounded-3xl">LOGO</div>
            <div class="text-6xl bg-blue-600 self-center ml-5 pl-5 pr-5 pb-2 pt-2 rounded-2xl">TITRE</div>
        </div>

        <nav class="p-3 bg-sky-400 rounded-2xl mt-2">
            <a class="rounded-2xl bg-sky-600 p-3 hover:bg-amber-400 inline-block min-w-24" href="">Home</a>
            <a class="rounded-2xl bg-sky-600 p-3 hover:bg-amber-400 inline-block min-w-24" href="">1</a>
            <a class="rounded-2xl bg-sky-600 p-3 hover:bg-amber-400 inline-block min-w-24" href="">2</a>
        </nav>
    </header>

    <main>
        <section class="m-3">
            <form method="post">
                <div>
                    <p>Civilité</p>
                    <input type="radio" name="civil" id="mr" value="monsieur" />
                    <label for="mr">Monsieur</label>
                    <input type="radio" name="civil" id="ms" value="madame" />
                    <label for="ms">Madame</label>
                    <input type="radio" name="civil" id="other" value="autre" />
                    <label for="other">Autre</label>
                </div>

                <div>
                    <label for="name">Prénom</label>
                    <input type="text" name="name" id="name" />
                    <label for="lastname">Nom</label>
                    <input type="text" name="lastname" id="lastname" />
                </div>

                <label for="adress">Adresse</label>
                <input type="text" name="adress" id="adress" />

                <label for="email">Email</label>
                <input type="email" name="email" id="email" />

                <label for="pass">Mot de passe</label>
                <input type="password" name="pass" id="pass" />
                <label for="pass_ver">Vérifiez le mot de passe</label>
                <input type="password" name="pass_ver" id="pass_ver" />

                <div>
                    <p>Choisissez vos passions</p>
                    <input type="checkbox" name="informatique" id="informatique" value="informatique" />
                    <label for="informatique">Informatique</label>
                    <input type="checkbox" name="sport" id="sport" value="sport" />
                    <label for="sport">Sport</label>
                    <input type="checkbox" name="lecture" id="lecture" value="lecture" />
                    <label for="lecture">Lecture</label>
                    <input type="checkbox" name="voyages" id="voyages" value="voyages" />
                    <label for="voyages">Voyages</label>
                </div>

                <button type="submit">ENVOYER</button>
            </form>
        </section>
    </main>

    <footer class="bg-sky-500 p-3">
        <ul class="gap-4">
            <li><a class="bg-sky-600 rounded-2xl block p-3 hover:bg-blue-800 mb-3" href="">Accueil</a></li>
            <li><a class="bg-sky-600 rounded-2xl block p-3 hover:bg-blue-800 mb-3" href="">Inscription</a></li>
            <li><a class="bg-sky-600 rounded-2xl block p-3 hover:bg-blue-800 mb-3" href="">Connexion</a></li>
            <li><a class="bg-sky-600 rounded-2xl block p-3 hover:bg-blue-800 mb-3" href="">Rechercher</a></li>
        </ul>
    </footer>
</body>

</html>