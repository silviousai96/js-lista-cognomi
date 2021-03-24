//1. chiedi all’utente il cognome
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova 
//(facciamo questo in 2 versioni: col ciclo for e col while)


//lista cognomi
var cognomi = ["bianchi", "neri", "rossi", "verdi", "gialli"];

//chiedo il cognome all'utente
var inputCognome = prompt ('Inserisci il tuo cognome: ');

//inserisco nell'array il cognome dell'utente
cognomi.push(inputCognome);
console.log(cognomi);

//riordino alfabeticamente la lista di cognomi con la funzione sort 
cognomi.sort();
console.log(cognomi);

//faccio il ciclo per stampare la lista di cognomi a schermo,
//e trovare la posizione del cognome inserito dall'utente 

for( var i=0; i < cognomi.length; i++ ) {
    var thisCogn = cognomi[i];

    document.getElementById('lista-cognomi').innerHTML += '<li>' + thisCogn + '</li>';

    if ( thisCogn == inputCognome ) {
        alert('Il tuo cognome è in posizione: ' + (i+1) );
    }
    
}