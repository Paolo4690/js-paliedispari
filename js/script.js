/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/
const btn1Controlla = document.querySelector('#btn-palindroma');
const btn2Controlla = document.querySelector('#btn2-palindroma');
const inputParola = document.querySelector('#input');
const resultPalindroma = document.querySelector('#result-palindroma');

btn1Controlla.addEventListener('click', function() {
    let palindromo1 = control1Palindromo(inputParola.value)
    if (palindromo1) {
        resultPalindroma.innerHTML = 'La parola inserita è un palindromo'
    } else {
        resultPalindroma.innerHTML = 'La parola inserita non è un palindromo'
    }
});

btn2Controlla.addEventListener('click', function() {
    let palindromo2 = inputParola.value;
    let parolaInversa = control2Palindromo(palindromo2);

    if(palindromo2 == parolaInversa){
        resultPalindroma.innerHTML = 'La parola inserita è un palindromo'
    } else {
        resultPalindroma.innerHTML = 'La parola inserita non è un palindromo'
    }
});

function control2Palindromo(stringa){
    let parolaInversa = '';
    let i = stringa.length - 1;

    while (i >= 0) {
        parolaInversa += stringa[i];
        i--;
    }
    return parolaInversa;
};

function control1Palindromo(stringa) {
    let splitStr = stringa.split('');
    let reversStr = splitStr.reverse();
    let joinStr = reversStr.join('');
    let palindromo
    if (stringa === joinStr) {
        palindromo = true
    } else {
        palindromo = false
    }
    return palindromo
};


/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// ELEMENTI HTML // ELEMENTI HTML // ELEMENTI HTML // ELEMENTI HTML 
const numero = document.querySelector('#number-user')
const btnPari = document.querySelector('#btn-pari');
const btnDispari = document.querySelector('#btn-dispari');
const resultPariDispari = document.querySelector('#result-pari-dispari');

// CLICK PARI // CLICK PARI // CLICK PARI // CLICK PARI // CLICK PARI 
btnPari.addEventListener('click', function() {
    let numeroUser = parseInt(numero.value);
    if (numeroUser > 5 || numeroUser <= 0) {
        resultPariDispari.innerHTML = 'Inserisci un numero compreso tra 1 e 5'
    } else {
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
    }


});

// CLICK DISPARI // CLICK DISPARI// CLICK DISPARI// CLICK DISPARI
btnDispari.addEventListener('click', function() {
    let numeroUser = parseInt(numero.value);
    if (numeroUser > 5 || numeroUser <= 0) {
        resultPariDispari.innerHTML = 'Inserisci un numero compreso tra 1 e 5'
    } else {
        let numeroPc = random(1, 5);
        let sommaNum = somma(numeroUser, numeroPc)
        let numeroPari = pari(sommaNum)

        let frase =`Tu hai scelto ${numeroUser},<br>Il Pc ha scelto ${numeroPc},<br>
        La somma dei numeri è ${sommaNum},<br>`;

        if (numeroPari == false) {
            resultPariDispari.innerHTML = `${frase} la somma è dispari! HAI VINTO`
        } else {
            resultPariDispari.innerHTML = `${frase} la somma è pari! HAI PERSO`
        }
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