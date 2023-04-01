/*
Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.

Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o traminte input).

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numeriRandomArray = [];

const output = document.getElementById('output');
// const numeriRandom = randomNumbers(document.createElement('h2'));
const numeriRandom = document.createElement('h2');

let random;

while(numeriRandomArray.length < 5){
  random = Math.floor(Math.random() * (9 - 1 + 1) + 1);
  // randomNumbers(1, 10);
  console.log(random);
  
  if(!(numeriRandomArray.includes(random))){
    numeriRandomArray.push(random); 
  }

}

showNumbers();
setTimeout(hideNumbers, 5000);


function showNumbers(){
  const daArrayAString = numeriRandomArray.join(' ');
  numeriRandom.innerHTML = `${daArrayAString}`;
  output.append(numeriRandom);
}

function hideNumbers(){
  numeriRandom.innerHTML = ``;
}

function randomNumbers(min, max) {
  // return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(numeriRandom);




























