//type conversions and coercion
//coercion is where javascript will automatically convert types from another and is completely hidden
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  // example shows the string of our year and our converted to number year
console.log(inputYear+ 18); // output is 199118 - just tacks on 18 at the end 
//we can convert strings to numbers by using Number -- with captial N
console.log(Number(inputYear) + 18); // -- demonstrated

console.log(Number('Jonas')); // example of attempting to number a string, we get NAN
console.log(typeof NaN); // is actually a number but a undefined number

//type coercion
console.log(`I am ` + 23 + ' years old'); //example of using type coercion becouse it automatically converts 23 in the background
//otherwise like in other languages we would have to specify --   String(23) as an example
console.log('23' - '10' -3); //this actually works becouse of coercion / automatic type conversion
//important distinction
console.log('23' + '10' + 3); // it actually concactenates vs converting - one caveat to using plus operator
console.log('23' * '2'); //works fine

//challenge below
let n = '1' + 1;
n = n - 1;
console.log(n);
//first off I notice that the first is a string so not really sure what the output is..
//another sort of tricky one
let x = 2 + 4 + 4 + '5';
console.log(x);
//we get the idea now
//some people think coercion is a bad idea, and its said can cause bugs in your code, however author stresses to know what it is doing and says to embrace it and is a good thing

//next up truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN

/*
    const money = 0;
    if (money) {
        console.log("Dont spend it all");
    } else {
        console.log('You should get a job!);
    }
    // -- output goes for the else statement by default its false becouse it = 0 and that is a falsy value by nature
*/

//    === is the comparison operater? 

const age = 19;
if (age === 18) console.log('You just became an adult');
// 18 === 19 would equal false

//can use prompt for user input
//const favorite = prompt("Whats your favorite number?");
//console.log(favorite);
//console.log(typeof favorite); //checking to see if its a string


//using different operator 

//  if (favorite !== 23) console.log('Why not 23?');

//logic and boolean logic
//combine true and false values includes, and , or & Not operates

/*
    A: sarah gas a driver's license
    B: Sarah has good vision
    can be either True or False
    ________________________
    A and B: 
    AND: True False
    True: True False
    False: False False
    ________________________

    awesome example below, how to test truth tables
*/

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

//console.log(hasDriversLicense && hasGoodVision); // = True becouse both is true
//hasDriversLicense = true;
//hasGoodVision = true; // would have to change this to true for the condition below


//console.log(hasDriversLicense && hasGoodVision);
//console.log(hasDriversLicense || hasGoodVision); // = true;

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired ) {
    console.log('Sarah is able to drive');
} else {
    console.log('someone else should drive'); // this still returns becouse isTired is true ,  can change to false and it works now
}

//now challenge --- my first attempt 

/* Write your code below. Good luck! 🙂 */

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
    
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
}

//will now watch the video
//so i learned if we have more then one if, we can actualle use ---else if---- for a second condition 
//so in our else statement which was what the author was wanting us to do is to compare both using ===
//  else if (scoreDolphins === scoreKoalas) { console.log...}

