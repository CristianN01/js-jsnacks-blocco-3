// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

const palla ={
    nome: 'palla',
    peso: 10,
};
console.log(palla)

const interact = Number.parseInt(prompt('cambia il peso della palla!', '10'), 10);
palla.peso = interact;

console.log(palla)