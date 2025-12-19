// # Dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Il numero più alto vince.

let playerNumber = Math.floor(Math.random() * 6 + 1);
console.log("Player:", playerNumber);

let pcNumber = Math.floor(Math.random() * 6 + 1);
console.log("PC:", pcNumber);

let outputMsg;

if (playerNumber === pcNumber) {
  outputMsg = `"Numbers are equal"`;
} else if (playerNumber > pcNumber) {
  outputMsg = `"Player Wins"`;
} else if (pcNumber > playerNumber) {
  outputMsg = `"PC Wins"`;
}
console.log(outputMsg);
