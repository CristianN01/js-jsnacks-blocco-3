

const clientNumber = Number.parseInt(prompt('quanti elementi desideri?'), 10);
let numbersArray = [];

if(Number.isNaN(clientNumber) || clientNumber > 20 || clientNumber < 5){
    clientNumber = 10;
}

for (let index = 0; index < clientNumber; index++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbersArray.push(randomNumber)
    
}
console.log(numbersArray);
console.log(numbersArray.slice(-5));




























// const list =[]


// for (let index= 0; index < clientNumber; index++){
//     const randomNumber = Math.floor(Math.random()* 100) +1
//     list.push(randomNumber)
    
    
    
//     console.log(list)


// }