const fridge =['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
// aggiungiamo pesca alla array
fridge.push('pesca')

// controlliamo se e stato aggiunto all'array
console.log(fridge)

// cerchiamo dentro il frigorifero se contiene il cocomero
const fridgeSearh = prompt('cerca nel frigo')
if (fridge.find(element => element == fridgeSearh)){
    console.log('Trovato! Devo solo preparare il cocktail.')
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!')
}



