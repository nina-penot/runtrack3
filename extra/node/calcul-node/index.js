//index.js
const nombres = [1, 2, 3, 4, 5, 10];

//somme
const somme = nombres.reduce((acc, n) => acc + n, 0);
console.log("Somme : ", somme);

//moyenne
const moyenne = somme / nombres.length;
console.log("Moyenne : ", moyenne);

//filter > 3
const plusDeTrois = nombres.filter(n => n > 3);
console.log("Nombres > 3 : ", plusDeTrois);