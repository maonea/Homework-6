// Avand un sir de caractere ce reprezinta scorul unui meci, sa se afiseze echipa castigatoare.
// Exemple:
// “Manchester City 1 - 1 Liverpool”  - se afiseaza “Egalitate”
// “Chelsea 4 - 1 Sheffield” - se afiseaza “Chelsea”
// “Dortmund 2 - 3 Bayern” - se afiseaza “Bayern”

const firstTeamName = prompt("What was the first team who played?");
const firstResult = prompt("How many goals has first team scored?");
const transformFirstResult = parseInt(firstResult)
console.log(`First team is: ${firstTeamName} and scored ${transformFirstResult}`)

const secondTeamName = prompt("What was the second team who played?");
const secondResult = prompt("How many goals has second team scored?");
const transformSecondResult = parseInt(secondResult);
console.log(`second team is: ${secondTeamName} and scored ${transformSecondResult}`)

if (transformFirstResult === transformSecondResult) {
    console.log(`The game ended with a draw.`);
} else if (transformFirstResult > transformSecondResult) {
    console.log(`The winning team is ${firstTeamName} with ${transformFirstResult} goals scored against ${secondTeamName}`);
} else {
    console.log(`The winning team is ${secondTeamName} with ${transformSecondResult} goals scored against ${firstTeamName}`);
}
