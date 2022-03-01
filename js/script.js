/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// ELEMENTI HTML // ELEMENTI HTML // ELEMENTI HTML // ELEMENTI HTML 
const btnPari = document.querySelector('#btn-pari');
const btnDispari = document.querySelector('#btn-dispari');
const resultPariDispari = document.querySelector('#result-pari-dispari');

// CLICK PARI // CLICK PARI // CLICK PARI // CLICK PARI // CLICK PARI 
btnPari.addEventListener('click', function() {
    let numeroUser = parseInt(prompt('inserisci un numero da 1 a 5'));
    let numeroPc = random(1, 5);
    let sommaNum = somma(numeroUser, numeroPc)
    let numeroPari = pari(sommaNum)
    
    let frase =`Tu hai scelto ${numeroUser},<br>Il Pc ha scelto ${numeroPc},<br>
    La somma dei numeri è ${sommaNum},<br>`;

    if (numeroPari == true) {
        resultPariDispari.innerHTML = `${frase} la somma è pari! HAI VINTO`
    } else {
        resultPariDispari.innerHTML = `${frase} la somma è dispari! HAI PERSO`
    }
});

// CLICK DISPARI // CLICK DISPARI// CLICK DISPARI// CLICK DISPARI
btnDispari.addEventListener('click', function() {
    numeroUser = parseInt(prompt('inserisci un numero da 1 a 5'));
    numeroPc = random(1, 5);
    sommaNum = somma(numeroUser, numeroPc)
    numeroPari = pari(sommaNum)

    let frase =`Tu hai scelto ${numeroUser},<br>Il Pc ha scelto ${numeroPc},<br>
    La somma dei numeri è ${sommaNum},<br>`;

    if (numeroPari == false) {
        resultPariDispari.innerHTML = `${frase} la somma è dispari! HAI VINTO`
    } else {
        resultPariDispari.innerHTML = `${frase} la somma è pari! HAI PERSO`
    }
});

// FUNZIONI GENERICHE // FUNZIONI GENERICHE // FUNZIONI GENERICHE // FUNZIONI GENERICHE 
function random(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min) ) + min;
    return numeroRandom;
};

function somma(a, b) {
    risultato = a + b;
    return risultato;
};

function pari(a) {
    if (a % 2 == 0) {
        risultato = true;
    } else {
        risultato = false;
    }
    return risultato
};