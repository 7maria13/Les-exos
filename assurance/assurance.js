let age = prompt("Quel est votre âge : ") ;
let permis = prompt("Quel est la durée de votre permis : ");
let accidents = prompt("Quel est votre nombre d'accident : ");
let anciennete = prompt("Quel est votre nombre d'annnée dans la compagnie  : ");
 
  
    if (age < 25 && permis < 2) {
      if (accident === 0) {
        if (anciennete > 5) {
          tarif = "Tarif orange";
        } else {
          tarif = "Tarif rouge";
        }
      } else {
        tarif = "Tarif refusé";
      }
    } else if (age < 25 && permis > 2) {
      if (accident === 0) {
        if (anciennete > 5) {
          tarif = "Tarif vert";
        } else {
          tarif = "Tarif orange";
        }
      } else if (accident === 1) {
        if (anciennete > 5) {
          tarif = "Tarif orange";
        } else {
          tarif = "Tarif rouge";
        }
      } else {
        tarif = "Tarif refusé";
      }
    } else if (age > 25 && permis > 2) {
      if (accident === 0) {
        if (anciennete > 5) {
          tarif = "Tarif bleu";
        } else {
          tarif = "Tarif vert";
        }
      } else if (accident === 1) {
        if (anciennete > 5) {
          tarif = "Tarif vert";
        } else {
          tarif = "Tarif orange";
        }
      } else if (accident === 2) {
        if (anciennete > 5) {
          tarif = "Tarif orange";
        } else {
          tarif = "Tarif rouge";
        }
      } else {
        tarif = "Tarif refusé";
      }
    }
  
   
  
 
  