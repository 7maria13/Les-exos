let age = prompt("Quel est votre âge : ") ;
let permis = prompt("Quel est la durée de votre permis : ");
let accidents = prompt("Quel est votre nombre d'accident : ");
let acciens = prompt("Quel est votre nombre d'annnée dans la compagnie  : ");


if (accidents == 0) {
    if ( age < 25 && permis < 2) {
        if (acciens > 5) {
            alert("orange");
        }
        else{
            alert("rouge");
        }
    }
    else if((age < 25 && permis > 2) || (age > 25 && permis < 2)){
        if (acciens > 5) {
            alert("vert");
        }
        else{
            alert("orange");
        }
    }
    else if (age > 25 && permis > 2) {
        if (acciens > 5) {
            alert("bleu");
        }
        else{
            alert("vert");
        }
    }
}
else if (accidents == 1){
    if((age < 25 && permis > 2) || (age > 25 && permis < 2)){
        if (acciens > 5) {
            alert("orange");
        }
        else{
            alert("rouge");
        }
    }
    else if (age > 25 && permis > 2) {
        if (acciens > 5) {
            alert("vert");
        }
        else{
            alert("orange");
        }
    }
}
else if (accidents == 2){
    if (age > 25 && permis > 2) {
        if (acciens > 5) {
            alert("orange");
        }
        else{
            alert("rouge");
        }
    }
} 
else {
    alert ("refusé")
}

  
