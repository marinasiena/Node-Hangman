//require
var inquirer = require('inquirer');
var Word = require('./wordList.js');
var inquirer = require('inquirer');

console.log('                       Indie Song Hangman                        ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪♪');
console.log('');

beginGame();

function beginGame(){
	var word = Word.refreshWord();
	word.display();
	loadGuess(word);
}



function loadGuess(word){
	inquirer.prompt([{
					 name: "letter",
					 message: "Guess a letter: ",
					 validate : function(input){
					 		return /[a-z]/.test(input.trim().toLowerCase());
						}
					}])

	.then(function(guess){
		word.letterInWord(guess.letter.toLowerCase());
		word.display();
		if( !word.guessed){
			if(word.guessesRemaining > 0){
				loadGuess(word);
			}else{
				console.log("\n"+"   You Lost.\n\n");
				beginGame();
			}

		}else if(word.guessed){
			console.log('♪♪♪♪♪♪♪♪♪♪♪♪♪');
			console.log("\n"+"     You Won.\n\n");
			console.log('♪♪♪♪♪♪♪♪♪♪♪♪♪');
			beginGame();
		}
	});
}
