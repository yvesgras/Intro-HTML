var result = document.getElementById('result');
// var prenoms =["Christophe","Aurélie", "Truc", "Machin","Chose","Iphigénie","Michel","Pierre","Blob"];

// // result.innerHTML="Hey!"; 

// les boucles, principes de base
// i égal 0, Inf à 5 et la var s'incrémente de 1 (++) fait donc, +1, +1, +1... jusqu'a arriver, ici, à 10

// for (var i = 0; i < 10; i++){
// console.log (i);
// }
// console.log(prenoms.length);
// //console.log(###.length); donne le nombre d'items contenus dans le tableau
// for (var i = 0; i < prenoms.length; i++){
//     // console.log(prenoms[i]);
//     result.innerHTML+=prenoms[i]+" ";
// }

// var films = ["jurassic Park","Avatar","Shining","Star Wars","Chucky","Saw","fight Club","Tron","Kill Bill","Vendredi 13"];
// var j = 0;
// while (j<films.length){
//     console.log(films [j]);
//     result.innerHTML+= films[j]+" ";
//     j++
//     //j++ pour incrémenter et éviter les boucles infinies !!important
// }

// // différence while et for : tant que la condition est "vraie" donc j<que le tableau (j++), Js execute la boucle


// function afficher(){
//     var coucou ="coucou!";
//     // console.log(coucou);
// }
// // afficher();
// console.log(coucou);

// function addition(valeur1,valeur2){
// console.log(valeur1+valeur2);
// }
// addition(2,5);

// var prenoms =["Damien","Maxime","Flavian","Yves"];
// var noms =["Dune","Acard","Delplanque","Gras"];

// function personne(a){
//     result.innerHTML += "Bonjour " + a + "<br>";
// }

// for (var i = 0; i <prenoms.length; i++) {
//     personne (prenoms[i]);
// }
// // personne("Stephen","Quiquet");
var input = document.getElementById('surprise')
function appuyer(){
result.innerHTML= input.value;
}
var carré = document.getElementById('carré');
function moveLeft(){
    carré.style.left = "0px";
}
function moveRight(){
    carré.style.left = "300px";
}