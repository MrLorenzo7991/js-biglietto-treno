//Input utente
    const etaUno = prompt("Inserisci l' età della prima persona");
    const etaDue = prompt("Inserisci l'eta della seconda persona");
//Calcoli
    if (etaUno > etaDue) {
        alert ("La prima persona è più grande")
    } else if (etaUno < etaDue) {
        alert ("La seconda persona è più grande")
    } else {
        alert ("Le due persone hanno la stessa età")
    }