// INIZIA IL TORNEO
// Creo la lista dei risultati
const roundsResults = [];

for (let i = 0; i < 3; i++) {
  // - Il Giocatore lancia il dado (sceglie un numero)
  let playerNumber = prompt("Scegli un numero da 1 a 6");
  console.log("Player:", playerNumber);

  // - Il PC lancia il dado
  let pcNumber = Math.floor(Math.random() * 6 + 1);
  console.log("PC:", pcNumber);

  // - Verifico se il giocatore vuole continuare e quale dei due numeri è maggiore
  let outputMsg;

  if (playerNumber != "STOP" && playerNumber == pcNumber) {
    outputMsg = "It's a Tie!";
  } else if (playerNumber > pcNumber) {
    outputMsg = `${playerNumber} is higher! Player Wins!`;
  } else if (pcNumber > playerNumber) {
    outputMsg = `${pcNumber} is higher! PC Wins!`;
  } else {
    outputMsg = "Game Over";
    alert("Game Over");
    throw new Error("Gioco interrotto dall'utente.");
  }

  // - Do il risultato
  console.log(outputMsg);
  alert(`Player: ${playerNumber} / PC: ${pcNumber} ... ${outputMsg}`);
  console.log("----------");

  // - Inserisco nella lista dei risultati
  if (outputMsg === `${playerNumber} is higher! Player Wins!`) {
    roundsResults.push("Player");
  } else if (outputMsg === `${pcNumber} is higher! PC Wins!`) {
    roundsResults.push("PC");
  } else if (outputMsg === "It's a Tie!") {
    roundsResults.push("Tie");
  }

  if (outputMsg === "Game Over") {
  }
}

// - Mostro la lista dei risultati
console.table(roundsResults);

// - Verifico chi ha vinto il torneo
let tournamentWinner;

// - Creo una bacheca dei punti
let playerPoints = 0;
let pcPoints = 0;

// - Conto i punti scorrendo la lista dei risultati dei round
for (let i = 0; i < roundsResults.length; i++) {
  const currentRound = roundsResults[i];
  if (currentRound === "Player") {
    playerPoints++;
  } else if (currentRound === "PC") {
    pcPoints++;
  }
}

// - Verifico chi ha fatto più punti
if (playerPoints > pcPoints) {
  tournamentWinner = "Player Wins the Tournament!!!";
} else if (pcPoints > playerPoints) {
  tournamentWinner = "PC Wins the Tournament!!!";
} else {
  tournamentWinner = "The Tournament ended in a Tie!";
}

console.log(tournamentWinner);
alert(tournamentWinner);
