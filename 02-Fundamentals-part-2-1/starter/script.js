//introduction to arrays
const friends = ['micheal', 'steven', 'peter'];
console.log(friends); // just prints the array itself
const y = new Array(1991, 1984, 2008, 2020 ); //changed due to years being used again below
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length -1]); // anything inside of [] treated as an expression
//exersize
const calcAvg  = function (birthyear) {
    return 2037 - birthyear;
}

const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAvg(years)) // returns NAN initally becouse our return state,
//  also you will notice calcAvg is the function name we are calling above but you can see the return expects a single value
const firstName  = 'chris';
const chris = [firstName, 'reed', 2037 - 1992, 'learner', friends];
console.log(chris);
//basic array operations(method)
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);
friends.unshift('John');
console.log(friends);
friends.shift(); // removes the first element
console.log(friends);

//pop removes last element
const popped = friends.pop(); //shows the element of which was removed
console.log(popped);
//can view index of any element of an array using .indexof
console.log(friends.indexOf('steven')); // ensure captals are correct or you get -1, which means does not belong in the array
// another function known as include will tell you if the element exists in the array - returns true or false
console.log(friends.includes('Bob')); //returns false becouse Bob is not in the array

//so we can push a number to an array like this:
friends.push(23);
console.log(friends.includes('23')); // lets try including '23' the string to see if corsian works - output: returns false
console.log(friends.includes(23)); //returns true

//bonus boolean check

//challenge

const calcTip = function(bill) {
    if(bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tip);