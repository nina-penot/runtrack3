<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <title>Document</title>
</head>

<body>
    <header class="bg-sky-500 p-3">
        <div class="flex">
            <div class="inline-block rounded-3xl bg-amber-400 p-5">LOGO</div>
            <div class="ml-5 self-center rounded-2xl bg-blue-600 pt-2 pr-5 pb-2 pl-5 text-6xl">TITRE</div>
        </div>

        <nav class="mt-2 rounded-2xl bg-sky-400 p-3">
            <a class="inline-block min-w-24 rounded-2xl bg-sky-600 p-3 hover:bg-amber-400" href="">Home</a>
            <a class="inline-block min-w-24 rounded-2xl bg-sky-600 p-3 hover:bg-amber-400" href="">1</a>
            <a class="inline-block min-w-24 rounded-2xl bg-sky-600 p-3 hover:bg-amber-400" href="">2</a>
        </nav>
    </header>

    <main>
        <section class="m-4 rounded-2xl bg-linear-180 from-sky-200 to-white p-3 border-2 border-sky-500">
            <form method="post">
                <div class="mb-2 inline-block w-full rounded-2xl bg-sky-300 p-2 text-center text-2xl font-bold">Formulaire d'Inscription</div>
                <div>
                    <div>
                        <p class="inline-block rounded-2xl bg-sky-300 p-2 font-bold"><span class="material-icons text-blue-900 float-left">settings_accessibility</span>Civilité</p>
                    </div>
                    <div class="p-2">
                        <input type="radio" name="civil" id="mr" value="monsieur" />
                        <label for="mr"><span class="material-icons">man</span>Monsieur</label>
                        <input type="radio" name="civil" id="ms" value="madame" />
                        <label for="ms"><span class="material-icons">woman</span>Madame</label>
                        <input type="radio" name="civil" id="other" value="autre" />
                        <label for="other"><span class="material-icons">transgender</span>Autre</label>
                    </div>
                </div>

                <div class="space-y-3">
                    <div class="space-x-11">
                        <div class="float-left">
                            <label class="inline-block rounded-2xl bg-sky-300 p-2 font-bold" for="name"><span class="material-icons text-blue-900 float-left">account_circle</span>Prénom</label>
                            <input class="rounded-sm border-2 border-amber-300 bg-amber-100 focus:outline-2 focus:outline-amber-500" type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label class="inline-block rounded-2xl bg-sky-300 p-2 font-bold" for="lastname"><span class="material-icons text-blue-900 float-left">account_circle</span>Nom</label>
                            <input class="rounded-sm border-2 border-amber-300 bg-amber-100 focus:outline-2 focus:outline-amber-500" type="text" name="lastname" id="lastname" />
                        </div>
                    </div>

                    <div>
                        <label class="inline-block rounded-2xl bg-sky-300 p-2 font-bold" for="adress"><span class="material-icons text-blue-900 float-left">home</span>Adresse</label>
                        <input class="w-3/4 rounded-sm border-2 border-amber-300 bg-amber-100 focus:outline-2 focus:outline-amber-500" type="text" name="adress" id="adress" />
                    </div>

                    <div class="space-y-1">
                        <label class="inline-block rounded-2xl bg-sky-300 p-2 font-bold" for="email"><span class="material-icons text-blue-900 float-left">alternate_email</span>Email</label>
                        <input class="ml-4 w-3/4 rounded-sm border-2 border-amber-300 bg-amber-100 focus:outline-2 focus:outline-amber-500" type="email" name="email" id="email" />
                    </div>

                    <div class="flex space-x-10">
                        <div class="space-y-2">
                            <label class="inline-block rounded-2xl bg-sky-300 p-2 font-bold" for="pass"><span class="material-icons text-blue-900 float-left">key</span>Mot de passe</label>
                            <input class="block rounded-sm border-2 border-amber-300 bg-amber-100 focus:outline-2 focus:outline-amber-500" type="password" name="pass" id="pass" />
                        </div>
                        <div class="space-y-2">
                            <label class="inline-block rounded-2xl bg-sky-300 p-2 font-bold" for="pass_ver"><span class="material-icons text-blue-900 float-left">lock</span>Vérifiez le mot de passe</label>
                            <input class="block rounded-sm border-2 border-amber-300 bg-amber-100 focus:outline-2 focus:outline-amber-500" type="password" name="pass_ver" id="pass_ver" />
                        </div>
                    </div>

                    <div>
                        <p class="inline-block rounded-2xl bg-sky-300 p-2 font-bold mb-2"><span class="material-icons text-blue-900 float-left">celebration</span>Choisissez vos passions</p>
                        <div>
                            <div>

                                <input type="checkbox" name="informatique" id="informatique" value="informatique" />

                                <label for="informatique"><span class="material-icons text-blue-900 align-top">computer</span>Informatique</label>
                            </div>
                            <div>
                                <input type="checkbox" name="sport" id="sport" value="sport" />
                                <label for="sport"><span class="material-icons text-blue-900 align-top">fitness_center</span>Sport</label>
                            </div>
                            <div>
                                <input type="checkbox" name="lecture" id="lecture" value="lecture" />
                                <label for="lecture"><span class="material-icons text-blue-900 align-top">book</span>Lecture</label>
                            </div>
                            <div>
                                <input type="checkbox" name="voyages" id="voyages" value="voyages" />
                                <label for="voyages"><span class="material-icons text-blue-900 align-top">flight</span>Voyages</label>
                            </div>
                        </div>
                    </div>

                    <button class="inline-block cursor-pointer rounded-2xl bg-amber-300 p-2 font-bold hover:bg-amber-200" type="submit">ENVOYER<span class="material-icons text-amber-900 align-top ml-2">send</span></button>
                </div>
            </form>
        </section>
    </main>

    <footer class="bg-sky-500 p-3">
        <ul class="gap-4">
            <li><a class="mb-3 block rounded-2xl bg-sky-600 p-3 hover:bg-blue-800" href="">Accueil</a></li>
            <li><a class="mb-3 block rounded-2xl bg-sky-600 p-3 hover:bg-blue-800" href="">Inscription</a></li>
            <li><a class="mb-3 block rounded-2xl bg-sky-600 p-3 hover:bg-blue-800" href="">Connexion</a></li>
            <li><a class="mb-3 block rounded-2xl bg-sky-600 p-3 hover:bg-blue-800" href="">Rechercher</a></li>
        </ul>
    </footer>
</body>

</html>