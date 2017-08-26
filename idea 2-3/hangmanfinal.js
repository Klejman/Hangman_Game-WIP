
// all possible word choices
var wordChoices = [
['g' + 'u' + 'n' + 's' + 'l' + 'i' + 'n' + 'g' + 'e' + 'r'], //gunslinger
['r' + 'o' + 'p' + 'e'], //rope
['s' + 'a' + 'l' + 'o' + 'o' + 'n'], //saloon
['b' + 'o' + 'o' + 't' + 's'], //boots
['h' + 'i' + 'g' + 'h' + 'n' + 'o' + 'o' + 'n'], //highnoon

var random = Math.floor((Math.random()*(wordChoices.length-1))); 

var selectWord = wordChoices[random]; // the word to guess will be chosen from the word array above
var word = new Array(wordChoices.length); 
var set = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < word.length; i++){
  word[i] = "_ ";//rate word
}

// prints the word out represented by underscores
function printWord(){
  for (var i = 0; i < word.length; i++){
  var wordField = document.getElementById("wordField");
  var letters = document.createTextNode(word[i]);
  wordField.appendChild(letters);
  console.log(printWord);

  }

}

  //checks if the the letter provided by the user matches one or more of the letters in the word
  var checkWord = function(){
    var f = document.display; 
    var b = f.elements["entry"]; 
    var letter = b.value; // the letter provided by the user
    letter = letter.toLowerCase();
    for (var i = 0; i < selectWord.length; i++){
      if(selectWord[i] === character){
        word[i] = character + " ";
        var correct = true;
      }
    b.value = "";
    }
    
    //deletes the guessfield and replaces it with the new one
    var wordField = document.getElementById("wordField");
    wordField.innerHTML=""; 
    printWord();
    
    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if(!correct){
      var wrongLetter = document.getElementById("wrongLetter");
      var letters = document.createTextNode(" " + letters);
      wrongLetters.appendChild(letters); 
      incorrect++;
      var hangman = document.getElementById("hangman");
      hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + set + ".png";
    }
    
    //checks if all letters have been found
    var wordComplete = true;
    for (var i = 0; i < word.length; i++){
      if(word[i] === "_ "){
        wordComplete = false;
      }
    }
    if(wordComplete){
      window.alert("Congratulations partner, you win!");
    }
    
    //once you got six wrong letters, you lose
    if(set === 6){
      window.alert("Sorry partner, you lose!");
    }
  }

  function init(){
    printWord();
  }

  window.onload = init;
