//EXO1
// var nom = prompt ("quel est ton nom?") ;
// console.log(nom);
// var resultat = document.getElementById("result");
// resultat.innerHTML= "Bonjour " + nom

// console.log(alert = "Bonjour " + nom);
// var resultat = document.getElementById("discret");
// resultat.innerHTML= "Coucou " + nom


//EXO2
// document.getElementById("un").style.borderColor="green"
// document.getElementById("deux").style.borderColor="yellow"
// document.getElementById("trois").style.borderColor="red"


// EXO3
// var resultat = document.getElementById("result");
// var i = prompt ("user");
// var j = prompt ("MDP");


// if(i == 1){
//     console.log("connexion réussie");
//     resultat.innerHTML = "connexion réussie";
//     resultat.style.color="green";

// }
// else{ 
//     console.log("fail")
//     resultat.innerHTML="Echec de connexion";
//     resultat.style.color="red";
// }

// //EXO4
var resultat = document.getElementById("result");
var i = prompt("Ecris un chiffre de 1 à 4");
// var j = prompt ("MDP");


if (i == 1) {
    console.log("connexion réussie");
    resultat.innerHTML = "connexion réussie";
    resultat.style.color = "green";

}

if (i == 2) {
    console.log("connexion réussie");
    resultat.innerHTML = "connexion Aussi";
    resultat.style.color = "green";

}

if (i == 3) {
    console.log("connexion réussie");
    resultat.innerHTML = "ça marche";
    resultat.style.color = "green";
    resultat.style.backgroundColor = "red";
}

if (i == 4) {
    console.log("connexion réussie");
    resultat.style.color = "green";

}
if (i > 4) {
    console.log("crétin");
    resultat.innerHTML = "tu ne sais pas compter, ou lire";
    resultat.style.color = "red";
}