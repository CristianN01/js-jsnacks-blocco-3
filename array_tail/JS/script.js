

const clientNumber = Number.parseInt(prompt('quanti elementi desideri?'), 10)
const list =[]


for (let index= 0; index < clientNumber; index++){
    const randomNumber = Math.floor(Math.random()* 100) +1
    list.push(randomNumber)
    
    
    
    console.log(list)


}


