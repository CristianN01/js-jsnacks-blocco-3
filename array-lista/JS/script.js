// const fridge =['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
// // aggiungiamo pesca alla array
// fridge.push('pesca')

// // controlliamo se e stato aggiunto all'array
// console.log(fridge)

// // cerchiamo dentro il frigorifero se contiene il cocomero
// const fridgeSearh = prompt('cerca nel frigo')
// if (fridge.find(element => element == fridgeSearh)){
//     console.log('Trovato! Devo solo preparare il cocktail.')
// } else {
//     console.log('Oh no, devo uscire a comprare il cocomero!')
// }

const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

frutta.push ('pesca')

console.log(frutta)

let isFound = false;

for(let index = 0; index < frutta.length; index++){
    if(frutta[index] === 'cocomero'){
        isFound = true;
    }
}
    

if(isFound){
    console.log('Trovato! Devo solo preparare il cocktail.')
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!')
}
