<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/mycss.css">
</head>

<body>
    <form>
        <div>Nom</div>
        <input type="text" name="lastname" id="lastname" required>
        <div>Prénom</div>
        <input type="text" name="name" id="name" required>
        <div>Email</div>
        <input type="text" name="email" id="email" required>
        <div>Mot de passe</div>
        <input type="text" name="password" id="password" required>
        <div>Adresse</div>
        <input type="text" name="adress" id="adress" required>
        <div>Code postal</div>
        <input type="text" name="codep" id="pcode" required minlength="5" maxlength="5">
        <button id="submit">ENVOYER</button>
    </form>


    <script src="./script.js"></script>
</body>

</html>