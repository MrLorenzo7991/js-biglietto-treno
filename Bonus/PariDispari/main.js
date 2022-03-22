//Input Utente
    let giocataUtente = prompt("Scegli pari o dispari!");
    let giocataUtenteConvertita = true;
    let numeroUtente = prompt("Scegli un numero compreso tra 1 e 9")
    giocataUtente = giocataUtente.toLowerCase();
    numeroUtente = parseInt(numeroUtente);
    const numeroComputer = Math.floor(Math.random() * 10);
    let somma = 0;
//Controllo input utente
    switch (giocataUtente) {
        case "pari":
            giocataUtenteConvertita = true;
            break;
        case "dispari":
            giocataUtenteConvertita = false;
            break;
        default:
            alert ("Scegli pari o dispari!");
    }
//Calcoli
    if(numeroUtente >= 1 && numeroUtente <= 9){
        somma = numeroUtente + numeroComputer;
        if(somma/2 == Math.floor(somma/2) && giocataUtente){
            alert(somma +" "+"E' uscito pari, Hai Vinto!");
        } else if (somma/2 == Math.floor(somma/2) && !giocataUtente){
            alert(somma +" "+ "E' uscito dispari, Hai perso...");
        } else if (somma/2 != Math.floor(somma/2) && !giocataUtente){
            alert(somma +" "+ "E' uscito dispari, Hai Vinto!");
        } else if (somma/2 != Math.floor(somma/2) && giocataUtente){
            alert(somma +" "+ "E' uscito dispari, Hai perso...")
        }
    } else {
        alert("Scegli un numero compreso tra 1 e 9!");
    }


    