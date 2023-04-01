/*
Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.

Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o tramite input).

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numeriRandomArray = [];

const output = document.getElementById('output');
const outputResult = document.getElementById('output-result');
// const numeriRandom = randomNumbers(document.createElement('h2'));
const numeriRandom = document.createElement('h2');
const newDiv = document.createElement('div');

let random;
//ottengo 5 numeri casuali unici
while(numeriRandomArray.length < 5){
  random = Math.floor(Math.random() * (9 - 1 + 1) + 1);
  // randomNumbers(1, 10);
  console.log(random);
  
  if(!(numeriRandomArray.includes(random))){
    numeriRandomArray.push(random); 
  }
  
}

// i 5 numeri casuali unici vengono mostrati in pagina
showNumbers();

// i 5 numeri casuali unici vengono nascosti dalla pagina dopo 5 secondi dal caricamento della pagina
setTimeout(hideNumbers, 5000);

//mostrare l'input dopo 5 secondi
setTimeout(showInput, 5000);

setTimeout(checkValue, 5000);

let counter = 0;

function checkValue(){

  
  const buttonCheck = document.getElementById('button-check');
  const inputNumber = document.getElementById('input-number');

      // Esegue il click su button automaticamente quando l'utente preme un invio sulla tastiera
      inputNumber.addEventListener("keypress", function(event) {
        // Se l'utente preme il tasto "Invio" sulla tastiera
        if (event.key === "Enter") {
          //* Annulla l'azione predefinita cioè se viene cliccato invio non scende a capo ma viene attivato il button
          event.preventDefault();
          buttonCheck.click();
        }
        
      });

      //al click del pulsante viene controllato se il numero inserito è contenuto nell'array dei numeri casuali unici
      buttonCheck.addEventListener('click', function() {
    counter++;

    if(numeriRandomArray.includes(parseFloat(inputNumber.value))){
      const result = document.createElement('div');
      result.innerHTML = `<p>${counter}) Bravo! Il numero inserito è giusto</p>`
      outputResult.append(result);
    }
    else if (!(numeriRandomArray.includes(inputNumber.value))){
      const result = document.createElement('div');
      result.innerHTML = `<p>${counter}) Non hai inserito il numero giusto</p>`
      outputResult.append(result);
    }

    
  });

      // // Esegue il click su button automaticamente quando l'utente preme un invio sulla tastiera
      // inputNumber.addEventListener("keypress", function(event) {
      //   // Se l'utente preme il tasto "Invio" sulla tastiera
      //   if (event.key === "Enter") {
      //     //* Annulla l'azione predefinita cioè se viene cliccato invio non scende a capo ma viene attivato il button
      //     event.preventDefault();
      //     buttonCheck.click();
      //   }
    
      // });
  

}


console.log(numeriRandom);


function randomNumbers(min, max) {
  // return Math.floor(Math.random() * (max - min + 1) + min);
}

function showNumbers(){
  const daArrayAString = numeriRandomArray.join(' ');
  numeriRandom.innerHTML = `${daArrayAString}`;
  output.append(numeriRandom);
}

function hideNumbers(){
  numeriRandom.innerHTML = ``;
}

function showInput(){
  newDiv.innerHTML = `
  <input id="input-number" type="number" value="" placeholder="Inserisci i numeri mostrati">
  <button id="button-check">Verifica</button>
  `
  output.append(newDiv);

}






























