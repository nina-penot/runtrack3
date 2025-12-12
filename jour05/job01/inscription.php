<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/mycss.css">
</head>

<body>
    <form id="inscription" method="post">
        <div>Nom</div>
        <input type="text" name="lastname" id="lastname" required
            placeholder="Entrez votre prénom (uniquement lettres, tirets et espaces.)">
        <div>Prénom</div>
        <input type="text" name="name" id="name" required
            placeholder="Entrez votre nom (uniquement lettres, tirets et espaces.)">
        <div>Email</div>
        <input type="email" name="email" id="email" required
            placeholder="Entrez votre email (format: email@domain.topdom)">
        <div>Mot de passe</div>
        <input type="password" name="password" id="password" required minlength="12"
            placeholder="Entrez votre mot de passe">
        <div>Adresse</div>
        <input type="text" name="adress" id="adress" required
            placeholder="Entrez votre adresse">
        <div>Code postal</div>
        <input type="text" name="codep" id="pcode" required minlength="5" maxlength="5"
            placeholder="Entrez votre code postal (ex : 11555)">
        <button id="submit" type="submit">ENVOYER</button>
    </form>


    <script src="./script.js"></script>
</body>

</html>