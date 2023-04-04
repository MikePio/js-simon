/*
Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.

Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o tramite input).

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numeriRandomArray = [];
const numeriInseritiArray = [];
const numeriSbagliatiInseritiArray = [];

const output = document.getElementById('output');
const outputResult = document.getElementById('output-result');
const buttonOutput = document.getElementById('final-output');
// const numeriRandom = randomNumbers(document.createElement('h2'));
const numeriRandom = document.createElement('h2');
const newDiv = document.createElement('div');
const newPElement = document.createElement('p');

let random;
//ottengo 5 numeri casuali unici
while(numeriRandomArray.length < 5){
  random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  // randomNumbers(1, 100);
  console.log(random);
  
  if(!(numeriRandomArray.includes(random))){
    numeriRandomArray.push(random); 
  }
  
}

numeriRandom.innerHTML = `<button id="button-start">Inizia</button>`;
output.append(numeriRandom);

const startGame = document.getElementById('button-start');
startGame.addEventListener('click', function(){
  // i 5 numeri casuali unici vengono mostrati in pagina
  showNumbers();
  
  // i 5 numeri casuali unici vengono nascosti dalla pagina dopo 5 secondi dal caricamento della pagina
  setTimeout(hideNumbers, 5000);
  
  //mostrare l'input dopo 5 secondi
  setTimeout(showInput, 5000);
  
  setTimeout(checkValue, 5000);
});


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
          if(!(numeriInseritiArray.includes(inputNumber.value))){
            result.innerHTML = `<p style="color: #48ff00; font-weight: bold; ">${counter}) Bravo! ${inputNumber.value} è giusto</p>`
            numeriInseritiArray.push(inputNumber.value); 
          } else {
            result.innerHTML = `<p style="color: #fff200; font-weight: bold; ">${counter}) ${inputNumber.value} è stato già inserito</p>`
          }
          inputNumber.value = "";
          outputResult.append(result);
        }
        else if (!(numeriRandomArray.includes(inputNumber.value))){
          const result = document.createElement('div');
          result.innerHTML = `<p style="color: #ff0000; font-weight: bold; ">${counter}) ${inputNumber.value} non è corretto</p>`
          numeriSbagliatiInseritiArray.push(inputNumber.value);
          inputNumber.value = ``;
          outputResult.append(result);
          
        }
        
        //Hai vinto quando ha inserito tutti i numeri giusti  
        if(numeriInseritiArray.length == numeriRandomArray.length){
          const result = document.createElement('div');
          result.innerHTML = `<p style = "color: #00fbff; font-weight: bold; "> HAI VINTO!!!🥳 Hai inserito tutti i numeri mostrati in precedenza</p>`
          outputResult.append(result);
          hideInput();
        }
        
        //Hai perso quando sbgli 3 volte 
        if(numeriSbagliatiInseritiArray.length == 3){
          const result = document.createElement('div');
          result.innerHTML = `<p style = "color: #ff9d00; font-weight: bold; "> HAI PERSO!😕 Hai sbagliato 3 volte. Riprova ancora</p>`
          outputResult.append(result);
          hideInput();
        }

        console.log('numeriInseritiArray.length', numeriInseritiArray.length);
        console.log('numeriRandomArray.length', numeriRandomArray.length);
        console.log('numeriSbagliatiInseritiArray.length', numeriSbagliatiInseritiArray.length);

      });
      
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
  <input id="input-number" type="number" value="" placeholder="Inserisci i numeri mostrati" style="width: 250px; height: 25px;">
  `
  newPElement.innerHTML = `
  <button id="button-check">Verifica</button>
  `
  output.append(newDiv);
  buttonOutput.append(newPElement);
}

function hideInput(){
  newPElement.innerHTML = ``;
  newDiv.innerHTML = ``;

  output.append(newDiv);
  buttonOutput.append(newPElement);
}






























