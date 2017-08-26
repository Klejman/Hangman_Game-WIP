
// all possible word choices
var wordChoices = ['gunslinger', 'rope', 'saloon', 'boots', 'highnoon'];

// global variables defined 
var wins, losses, guessesLeft, guessesSoFar, userGuess;
wins = 0; 
losses = 0;
guessesLeft = 9;
// guessesSoFar is an array that will hold all the user's guesses in each round
guessesSoFar = [];
// Have computer pick a word and store it in wordToBeGuessed
var wordToBeGuessed = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(wordToBeGuessed)
//computer choice to an empty array
var answer = [];
//empty variable
var blank;


//function that iterates through the wordChoice selected and replaces with an underscore
function gameSetup() {
  for (var i = 0; i < wordToBeGuessed.length; i++) {   
  answer[i] = "_"; //assign answer underscore to variables in the wordChoices array
  //number of underscores in word guessed
  blank = answer.join(" "); 
} 

  console.log(gameSetup); 

//print the guessfield
function printWordOut () {
  for (var i = 0; i < wordToBeGuessed.length; i++) {
    var printOut = document.getElementById("printOut");
    var word = document.createTextNode(blank[i]);
    printOut.appendChild(word);
  }
}



document.onkeyup = function(event) {

    // When user presses a key, it records it and saves to userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();




    /*
      1. make sure no repeated guesses in same game
      2. make sure choice valid or one of the array items letters in word
      3. Add user's guess to array 
      4. deduct remaining guesses with each guess made
      */

    if (guessesSoFar.indexOf(userGuess) < 0 && wordChoices.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
       guessesLeft--;
     }
    }

    /* 
        if letterToBeGuessed == userGuess add to global win
        and then reset game
    */

    if (wordToBeGuessed == userGuess) {
        wins++;
        //tried alert here but stopped the function and did not display the last guess and the counter was stuck at 1 remainging guess
        console.log("Congratulations partner, your wit saved you from the hangman's noose");
        guessesLeft = 9;
        guessesSoFar = [];
        wordToBeGuessed = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + wordToBeGuessed);
      }
    }
  

    /*
     1. if guessesLeft gets = 0 display loss to global score
     2. and then reset the game   
    */

    if (guessesLeft == 0) {
        losses++;
        //tried alert here but stopped the function and did not display the last guess and the counter was stuck at 1 remaining guess
       console.log("Sorry partner, you lost!");
        guessesLeft = 9;
        guessesSoFar = [];
        wordToBeGuessed = wordChoices[Math.floor(Math.random() * wordChoices.length)];
      }
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + wordToBeGuessed);
    

    // Game Play displayed to user
    var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Guesses so far: " + guessesSoFar + "</p>";
    // game ID displays HTML
    document.querySelector("#game").innerHTML = html;
    // underscore displays the word length to user
    var htmlUnderscore = "<p><h3>Your word: " + blank + "</h3></p>"; 
    // game ID displays HTML
    document.querySelector("#game3").innerHTML = htmlUnderscore;




