console.log("JS OK!")

// SCALETTA LOGICA DA SEGUIRE
/* 
1- far inserire all'utente is suo nome
2- far inserire all'utente is luo cognome
3- far inserire all'utente il suo colore preferito 
4- selezionare l'oggetto dal foglio html e definirlo come variabile  
4- stampare una stringa con scritto la mia password e nome piu cognome piu colore piu 21 

*/
// Chiedo il nome all'utente
const nome = prompt("Inserisci il tuo nome");
console.log(nome);

// Chiedo il cognome all'utente

const surname = prompt("Inserisci il tuo cognome");
console.log(surname);

// Chiedo all'utente isl suo colore preferito

const favColor = prompt("Inserisci il tuo colore preferito");
console.log(favColor);

// seleziono l'elemtento html e lo definisco
const password = document.getElementById("password");
console.log(password)


// assegno il valore da stampare all'elemento html

password.innerText = `${nome}${surname}${favColor}21`



