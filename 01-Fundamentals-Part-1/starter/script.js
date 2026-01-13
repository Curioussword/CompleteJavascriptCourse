 let js = "amazing";
        if (js === "amazing") alert("JavaScript is FUN!");

        console.log(40 + 8 + 23 - 10);
        console.log("Jonas");
        console.log(23);
        let firstName = "Jonas";
        console.log(firstName);

        //assignment - define country, continent and population
              let country = "India";
              let continent = "Asia";
              let population = 1400000000;
              console.log(country);
              console.log(continent);
              console.log(population);
       

/*
Everything in javascript is a object/ AKA Dictonaries as an example or a primitive type AKA a variable
There are 7 primitive types - string, number, boolean, symbol, undefined, null, big int
Numbers are always floating point or decimal like 23.0 all numbers are decimals and integers all in one
Strings anything in "" or ''
Boolean only takes true or false
we can describe empy variables - example --- let children;  and is considered ('empty value')
Bigint larger integers than the Number type can hold
Javascript automatically determines the data type unlike many other languages. This is called dynamic typing and its always value has the type not variable

*/

// true; // is a value , a boolean value

let javascriptIsFun = true;
//java code is executed from top to bottom 
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
//dynamic typing - means we can easily change the type of a value
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
console.log(typeof null);

//let, const and var
/*
      mutating variables
      let age = 30;
      age = 31; -- completely valid 

      const is to be used on variables that are not suppose to change
      also with const, you can not leave a const undefined when declaring
      var can be mutated just like 'let'
      

*/

/*
      operations and assignment operators
      such as x+= 10; means x = x + 10, so it would actually = 25 not 10
      another example: x *= 4; means it will grab whatever x is which last example x was 25 so it would = 4 * 25 which is 100;
      x++ would be 101 so it just adds 1 essentially


*/
//could also use let if you wanted to make variables mutuable
//in this case we use const becouse we want the variable to not change
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2   
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName_01 = 'Jonas';
const lastName_01 = 'Schmedtmann';
console.log(firstName_01 + ' ' + lastName_01);
let x = 10 + 5;
console.log(x);

/*
      comparison operators to produce boolean values
      such as < > +<, >=, <= so on...

*/

console.log(ageJonas > ageSarah); // results to true
//check to see if sarah is = or older then 18
console.log(ageSarah >= 18);


//next we add a new section 1-1 to take more notes so that it does not take up to much space in file
