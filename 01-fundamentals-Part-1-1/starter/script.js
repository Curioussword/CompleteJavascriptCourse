/*
    lets explain operator precendance
*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
//java script has a well defined order of operations precendance 
/*
    mdn operator precendence gives a table and is well known for documenation on javascript which is a nice reference to show us
    for example it will show () has the highest order of precedence

*/

let x, y;
x = y = 25-10-5; //should = 10 -- in this example the - operator will have the highest precendance here on the table it shows left - right and is number 14 in the order
//so for the above, x and y both = 10
console.log(x, y);
