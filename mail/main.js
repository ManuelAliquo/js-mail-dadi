// # Mail

// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email, controlla che sia nella lista
// e stampa un messaggio appropriato sull’esito del controllo utilizzando un ciclo for.

// - Creo la lista di email
const emailList = ["topolino", "paperino", "pluto"];
console.table(emailList);

// - Chiedo all'utente la sua email
const userEmail = prompt("Inserisci la tua email");
console.log("User email:", userEmail);
console.log("-------------");

let foundEmail = `"Your email isn't in the list, you got to leave.."`;

for (let i = 0; i < emailList.length; i++) {
  const currentEmail = emailList[i];
  isUserEmail = userEmail === currentEmail;
  if (isUserEmail === true) {
    foundEmail = `"Your email is in the list, welcome to the party!"`;
  }
}
console.log(foundEmail);
