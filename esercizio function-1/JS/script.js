// Snack 12
// ! Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// ! const firstWord = prompt('Inserisci la prima parola');
// !const secondWord = prompt('Inserisci la seconda parola');

// !function lengthMeasure(first, second){
// !    if(first.length === second.length){
// !       return [first, second];
// !    } else if(first.length > second.length){
//  !       return first;
//  !   } else {
//  !       return second;
//  !   }
// !}

// ! lengthMeasure(firstWord, secondWord)

// ! ESERCIZIO NON FUNZIONANTE

// ? CORREZIONE DELL'ESERCIZIO 

// const useWordA = prompt('scrivi la prima parola');
// const useWordB = prompt('scrivi la seconda parola');

// function sonoLungheUguali(parolaA, parolaB){
//     if (parolaA.length === parolaB.length ){
//         return true;
//     } else {
//         return false;
//     }
// }

// if(sonoLungheUguali(useWordA, useWordB) == true){
//     console.log(useWordA, useWordB);
// } else if(useWordA.length > useWordB.length){
//     console.log(useWordA)
// } else {
//     console.log(useWordB)
// }

// ? console.log(sonoLungheUguali(useWordA, useWordB))

// ?ESERCIZIO FUNZIONANTE

// * Es 2

// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

// function getReversedNumber (number){
//     let string = number.toString();
//     let reverseString = '';

//     for (let index = string.length; index >= 0; index--) {
//         reverseString += string[index];
//     }
//      return reverseString;
// }

 // ? PER CREARE UN NUMERO RANDOMICO CON UNA FUNZIONE

// function getRandomInt(min, max){
//     const randomNumber = Math.floor( Math.random()* (max - min + 1) + min);
//     return randomNumber;
// }

// console.log(getRandomInt(100, 200));

// ? ESERCIZIO FUNZIONANTE


