"use strict";

// # rounds
/*
  - wenn eine auswahl getroffen wird, erscheint die aktuelle anzahl an runden "1/5"
*/

// # result
/*
  - mit jeder runde die gespielt wird, muss sich das ergebnis um 1 erhähen => i++
*/

// # lets play
/*
  - ändert sich zu "x gewinnt gegen y" sobald eine auswahl getroffen wurde
*/

// # choose
/*
  - sobald eine auswahl getroffen wurde, ändert sich result
  - bei auswahl ändert sich rounds
*/

// # restart
/*
  - setzt alles auf default zurück
*/

// ! v0.01
/*
  - HTML
*/

// ! v0.1
/*
  - buttons ans laufen kriegen / gewinnlogik einbauen
  - result anzeigen lassen
*/

// ! v0.2
/*
  - rounds auswahl einarbeiten
*/

// ! v0.3
/*
  - lets play und rounds anzeige erstellen
*/

// ! v0.4
/*
  - restart funktion einbauen
*/

// ! v0.5
/*
  - css
*/

const choiceBtn = document.querySelectorAll(".choose button");
const displayWinner = document.querySelector(".lets_play");
const score = document.querySelector(".score");
let cpuScore = 0;
let userScore = 0;

function cpuRandomPick() {
  const randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    return "schere";
  } else if (randomNumber === 2) {
    return "stein";
  } else {
    return "papier";
  }
}

choiceBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    let userPick = event.target.id;
    let cpuPick = cpuRandomPick();

    // # User nimmt Schere
    if (userPick === "schere" && cpuPick === "schere") {
      displayWinner.innerHTML = `Schere v Schere <br> Its a DRAW!!`;
    } else if (userPick === "schere" && cpuPick === "stein") {
      displayWinner.innerHTML = `Schere v Stein <br> YOU loose!!`;
      cpuScore++;
    } else if (userPick === "schere" && cpuPick === "papier") {
      displayWinner.innerHTML = `Schere v Papier <br> YOU win!!`;
      userScore++;

      // # User nimmt Stein
    } else if (userPick === "stein" && cpuPick === "schere") {
      displayWinner.innerHTML = `Stein v Schere <br> YOU win!!`;
      userScore++;
    } else if (userPick === "stein" && cpuPick === "stein") {
      displayWinner.innerHTML = `Stein v Stein <br> Its a DRAW!!`;
    } else if (userPick === "stein" && cpuPick === "papier") {
      displayWinner.innerHTML = `Stein v Papier <br> YOU loose!!`;
      cpuScore++;

      // # User nimmt Papier
    } else if (userPick === "papier" && cpuPick === "schere") {
      displayWinner.innerHTML = `Papier v Schere <br> YOU loose!!`;
      cpuScore++;
    } else if (userPick === "papier" && cpuPick === "stein") {
      displayWinner.innerHTML = `Papier v Stein <br> YOU win!!`;
      userScore++;
    } else if (userPick === "papier" && cpuPick === "papier") {
      displayWinner.innerHTML = `Papier v Papier <br> Its a DRAW!!`;
    }
    score.innerHTML = `${userScore}:${cpuScore}`;
  });
});
