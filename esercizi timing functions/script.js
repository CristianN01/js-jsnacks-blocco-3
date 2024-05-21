// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let seconds = Number.parseInt(prompt('inserisci un numero'), 10);

const timer = setInterval( function(){
    seconds--;
    console.log(seconds);
    if(seconds <= 0){
        clearInterval(timer);
        alert('FINE')
    }
}, 1000);
