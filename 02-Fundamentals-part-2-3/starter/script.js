//loops keeps running while condition is true


for(let rep =1; rep <= 10; rep++) {
   // console.log(`Lifting weights repetition ${rep}`);
}

const chris = [
    'chris',
    'reed',
    2026 - 1992,
    'learner',
    ['micheal', 'peter', 'steven']
];

console.log(chris);

for ( let i = 0; i <= chris.length; i++ ) { // Here we start at 0 and then increment, becouse with arrays the first element is 0
    console.log(chris[i]); // can also print type of and use chris[i] - this will give you the type of each object in the array
    //example of typeof
    console.log(typeof chris[i]);
} 

//filling types array
//types[i] = typeof jonas[i];

//console.log(types);
const years = [1991, 2007, 1969, 2020];

//so to print only strings we can use typeof

console.log('---ONLY STRINGS---')
for (let i = 0; i < chris.length; i++) {
    if(typeof chris[i] !== 'string') continue;
    console.log(chris[i], typeof chris[i]);
}

//iterating over a loop backwards - i want to add my own twist and create a function out of this. outside the scope of the class

const bkwordLoop = function() {
    for (let i = chris.length -1; i >= 0; i--) {
        console.log(i, chris[i]);
    }
}

const completeLoop = bkwordLoop;
console.log(completeLoop);

/* for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`-----Starting exersize ${exercise} `);
    for(let rep = 1; rep <= 6; rep++) {
        console.log(`Lefting weight repetion ${rep}`);
    }
} */

let rep = 1;
while (rep <= 10) {
    console.log(`While: Lifting weights repetition ${rep}`); rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

//Challenge

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    //console.log(tip);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);


//end of section 3



