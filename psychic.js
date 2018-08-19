var letter_choice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var wins = 0;
    var losses = 0;
    var numGuesses = 9;
    var guessesLeft = [];

    document.onkeyup = function(event) {
     var computerGuess = computerChoices[Math.floor(Math.random)()]   
    }
    if (userGuess === computerGuess) {
        wins++;
        numGuess = 9;
        guessChoices = [];
    }

    if (numGuess === 0) {
        numGuesses = 9;
        losses ++;
        guessChoices = [];
    }