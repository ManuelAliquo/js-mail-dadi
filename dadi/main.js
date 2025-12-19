// # Dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Il numero più alto vince.

// - Il giocatore lancia il dado
let playerNumber = Math.floor(Math.random() * 6 + 1);
console.log("Player:", playerNumber);
// - Il PC lancia il dado
let pcNumber = Math.floor(Math.random() * 6 + 1);
console.log("PC:", pcNumber);
// - Verifico quale dei due numeri è maggiore
let outputMsg;

if (playerNumber === pcNumber) {
  outputMsg = `"Numbers are equal"`;
} else if (playerNumber > pcNumber) {
  outputMsg = `"Player Wins"`;
} else if (pcNumber > playerNumber) {
  outputMsg = `"PC Wins"`;
}
// - Do la risposta
console.log(outputMsg);
