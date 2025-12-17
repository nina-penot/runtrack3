<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <title>Document</title>
</head>

<body>
    <header>
        <nav>
            <a href="">Home</a>
            <a href="">1</a>
            <a href="">2</a>
        </nav>
    </header>

    <main>
        <section>
            <form method="post">
                <div>
                    <p>Civilité</p>
                    <input type="radio" name="civil" id="mr" value="monsieur">
                    <label for="mr">Monsieur</label>
                    <input type="radio" name="civil" id="ms" value="madame">
                    <label for="ms">Madame</label>
                    <input type="radio" name="civil" id="other" value="autre">
                    <label for="other">Autre</label>
                </div>

                <div>
                    <label for="name">Prénom</label>
                    <input type="text" name="name" id="name">
                    <label for="lastname">Nom</label>
                    <input type="text" name="lastname" id="lastname">
                </div>

                <label for="adress">Adresse</label>
                <input type="text" name="adress" id="adress">

                <label for="email">Email</label>
                <input type="email" name="email" id="email">

                <label for="pass">Mot de passe</label>
                <input type="password" name="pass" id="pass">
                <label for="pass_ver">Vérifiez le mot de passe</label>
                <input type="password" name="pass_ver" id="pass_ver">

                <div>
                    <p>Choisissez vos passions</p>
                    <input type="checkbox" name="informatique" id="informatique" value="informatique">
                    <label for="informatique">Informatique</label>
                    <input type="checkbox" name="sport" id="sport" value="sport">
                    <label for="sport">Sport</label>
                    <input type="checkbox" name="lecture" id="lecture" value="lecture">
                    <label for="lecture">Lecture</label>
                    <input type="checkbox" name="voyages" id="voyages" value="voyages">
                    <label for="voyages">Voyages</label>
                </div>

                <button type="submit">ENVOYER</button>
            </form>
        </section>
    </main>

    <footer>
        <ul>
            <li><a href="">Accueil</a></li>
            <li><a href="">Inscription</a></li>
            <li><a href="">Connexion</a></li>
            <li><a href="">Rechercher</a></li>
        </ul>
    </footer>
</body>

</html>