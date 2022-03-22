//Definisco costanti//
    const prezzoKm = 0.21;
    const scontoMinorenni = 0.8;
    const scontoAnziani = 0.6;
    let prezzo = 0;
    let prezzoFinale = 0;
//Informazioni Utente
    const eta = prompt("quanti anni hai?");
    const kilometri = prompt("Quanti kilometri vuoi percorrere?")
//Calcolo prezzo
    prezzo = kilometri * prezzoKm;
    if (eta < 18) {
        prezzoFinale = (prezzo * scontoMinorenni).toFixed(2)
    } else if (eta >= 65) {
        prezzoFinale = (prezzo * scontoAnziani).toFixed(2)
    } else {
        prezzoFinale = (prezzo).toFixed(2)
    }
//Visualizzazione prezzo
    document.getElementById("prezzo").innerHTML = prezzoFinale;
