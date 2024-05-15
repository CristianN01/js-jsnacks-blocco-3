// Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

// const array =[];

// while(array.length < 6){
//     const numbers = Number.parseInt(prompt('Type a number'), 10);
//     if (Number.isNaN(numbers) /= true && numbers % 2 === 1 ){
//         array.push(numbers);
//     }
    

// }

// console.log(array);

// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const firstArray = [5, 6, 3, 1, 8, 4]
const secondArray = [5, 6, 3, 1, 8, 4, 6, 9, 4, 5]
console.log(firstArray, secondArray)

while( firstArray.length < secondArray.length){
    let numbers = Math.floor(Math.random()* 100) +1
    firstArray.push(numbers)

}

console.log(firstArray)