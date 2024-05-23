// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const autoMobili =[
    {
        marca :'Audi',
        modello :'A1',
        alimentazione :'benzina',
    },
    {
        marca :'Audi',
        modello :'A3',
        alimentazione :'diesel',
    },
    {
        marca :'Fiat',
        modello :'punto',
        alimentazione :'gpl',
    },
    {
        marca :'BMW',
        modello :'I3',
        alimentazione :'elettrico',
    },
    {
        marca :'fiat',
        modello :'600',
        alimentazione :'metano',
    },
    {
        marca :'Nissan',
        modello :'GTR',
        alimentazione :'benzina',
    },
    {
        marca :'Mercedes',
        modello :'A',
        alimentazione :'diesel',
    },
    {
        marca :'fiat',
        modello :'panda',
        alimentazione :'gpl',
    },
    {
        marca :'Audi',
        modello :'g-tron',
        alimentazione :'elettrico',
    },
    {
        marca :'Alfa Romeo',
        modello :'giulia',
        alimentazione :'metano',
    },
    {
        marca :'Alfa Romeo',
        modello :'Giulietta',
        alimentazione :'benzina',
    },
    {
        marca :'Volkswagen',
        modello :'golf',
        alimentazione :'diesel',
    },
    {
        marca :'Volkswagen',
        modello :'UP',
        alimentazione :'gpl',
    },
    {
        marca :'Toyota',
        modello :'aygo',
        alimentazione :'elettrico',
    },
    {
        marca :'Audi',
        modello :'A2',
        alimentazione :'metano',
    },
]

const benzina = autoMobili.filter((auto) =>{
    if(autoMobili.alimentazione === 'benzina'){
        return true;
    }
});

console.log(benzina)

// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    {
        nome :'Marco',
        cognome :'Marchetti',
        eta : 12,
    },
    {
        nome :'Eric',
        cognome :'Erichetti',
        eta : 15,
    },
    {
        nome :'Alessia',
        cognome :'Alessietti',
        eta : 17,
    },
    {
        nome :'Giorgio',
        cognome :'Giorgetti',
        eta : 43,
    },
    {
        nome :'Carla',
        cognome :'Carletti',
        eta : 18,
    },
    {
        nome :'Antonio',
        cognome :'Antonietti',
        eta : 50,
    },
    {
        nome :'Anna',
        cognome :'Annetti',
        eta : 16,
    },
    {
        nome :'Mirko',
        cognome :'Mirchetti',
        eta : 28,
    },
    {
        nome :'Alessio',
        cognome :'Alessietti',
        eta : 30,
    },
    {
        nome :'Giulio',
        cognome :'Giulietti',
        eta : 22,
    },

]

const patente = persone.map((persona)=> {
    if(persona.eta >= 18 ){
        return `${persona.nome} ${persona.cognome} ${persona.eta}`+ ' ' + 'Puo guidare!';
    } else {
        return `${persona.nome} ${persona.cognome} ${persona.eta}`+ ' ' + 'Non puo guidare!';
    }
});

console.log(patente);