// Exercitiul 1
// Sa se prelucreze numele unei localitati introduse de utilizator, eliminandu-se toate spatiile albe.
// Bonus: Spatiile albe din interior se inlocuiesc cu “-”.



const userAnswer = prompt("Please type in a city: ");

alert (`
    The answer is : ${userAnswer}, 
    Without white spaces is:  ${userAnswer.replace(/\W+/g, '')}
    White spaces replaced by dash: ${userAnswer.replace(/\W+/g, '-')}`);






















