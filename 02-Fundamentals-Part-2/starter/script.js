// "use strict" or considered strict mode
//will allow you to enable strict mode, which reserves keywords that are built in javascript



function logger () {
    console.log('My name is Chris');
}

//then calling / running / invoking function like this:
logger();
//we can call the function many times
logger();
logger();

function fruitProccesor(apples, oranges) {

    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
//only works by assigning function to a variable -- why
//take whatever comes out of this function and store it in a container called applejuice so i can use it later
//const appleJuice = fruitProccesor(5,0);
const appleJuice = fruitProccesor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProccesor(2, 4);
console.log(appleOrangeJuice);


//now function declarations vs expressions ***

//functions are reusable pieces of code that you can re-use over and over again
//a variable holds a value
//function can hold 1 or more lines of code

//this is a example of a function declaration
function calcAge1(birthYear) {

    return 2037 - birthYear;
}

const age1 = calcAge1(1991); // we pass in the actual value for birthyear into a expression
console.log(age1); // print the calculated age that returns 2037 - birthYear

//this example of function expression 
const calcAge2 = function (birthYear) {

    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//functions are values which can be stored in a variable 

//arrow functions -- do not need to specify the word function
const calcAge3  = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991); // this just takes a number and puts it in birthYear
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => { // we modified to take two parameters, originally was just birthYear

    const age = 2037 - birthYear;
    const retirement = 65 -age;
   // return retirement; // we can also return a string
    return `${firstName} retires in ${retirement} years `;
}

console.log(yearsUntilRetirement(1991, 'Chris'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//calling functions inside of another function
function cutFruitPieces(fruit) {   // we can see that there is one paramter put into this function which is why when we give applePieces one fruit and we have to call cutpieces twice
    return fruit * 4;
}

function fruitProccesor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange. `;
    return juice;
}; //dont forget semi colin

console.log(fruitProccesor(2, 3));


console.log("Hello world!!!");



//challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {

    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`The Dolphins score is: ${avgDolphins} and the averageKoalas score is: ${avgKoalas} , There for Dolphin's win!`)
    }

    else if (avgDolphins <= 2 * avgKoalas) {
        console.log(`The dolphins losing score is: ${avgDolphins}, and the Koalas win!: ${avgKoalas}`)
    } else {
        console.log("no team wins!")
    }

}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
