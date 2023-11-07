function calculerTarif(age, permis, accident, anciennete) {
    let tarif = "";
  
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
  
   
  }
  console.log(calculerTarif);