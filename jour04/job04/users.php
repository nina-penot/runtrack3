<?php


function db_connect()
{
    static $pdo = null;

    if ($pdo === null) {
        try {
            $pdo = new PDO("mysql:host=localhost:3306;dbname=utilisateurs", "root", "", [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Active les exceptions en cas d'erreur SQL
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Retourne les résultats sous forme de tableau associatif
            ]);
        } catch (PDOException $e) {
            exit('Erreur de connexion BDD');
        }
    }

    return $pdo;
}

function fetch_all()
{
    $query = "SELECT * FROM utilisateurs";
    $params = [];
    $pdo = db_connect();
    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    return $stmt->fetchAll();
}
