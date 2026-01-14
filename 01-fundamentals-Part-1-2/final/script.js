//you can use double quotes when you want to do something like I'm , in string can "I'm" +  and continue..
const firstName = 'chris';
const job = 'coder';
const birthYear = 1992;
//had to add a space after m and to seperate the quotation to make the string look good
const chris = "I'm " + firstName + ', a ' + job + ' and I am born in ' + birthYear;
console.log(chris);

//template literals are used with backticks and essentially makes life easier syntax is  ` ${variable} `;
const chrisnew = `I'm ${firstName}`;
console.log(chrisnew);
//allot easier using our string above
const chris_example = `I'm ${firstName}, a ${job} and I am born in ${birthYear}!`;
console.log(chris_example);


const year = 2026;
//also per teachers example used a math operation using templates
const math_example = `${year - birthYear} years old`;
console.log(math_example);

//next multi line strings, and this is with backticks --- btw this is the old way - this was used due to a bug back in the day
console.log(`String with \n\ 
multiple \n\
Lines`);

//now we can use multiple only now and it works, also soon we can start using these backticks and multiple which will come handy when working with html

console.log(`String
multiple`)

//next if else statements section


/*
const age = 19;
//basically taking age and comparing it to 18..Are they old enough?
//if we change it to 15 then it would be false
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');

}

*/

const age = 19;
//could also just compare the numbers, and make the code shorter by cutting out isOldEnough and just using the age that they actually are/
if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    //if it is false
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`); //remember to use backticks
}




const birthYear_1 = 1998; //had to use _1 due to birthyear already being a variable defined, also if we change this to 2012 or any year above 2000, we get 21 century indeed

let century; // we get go ahead and assign and do not really have to define it, just long as its called 

if (birthYear_1 <= 2000) { // less then
    //let century = 20; //remove let 
    century = 20;
} else {
    //let century = 21; //if its more then = 21st century ---- remove let
    century = 21;
    //problem is with the above, these variables are defined within scopes and we need century to be defined outside of scope. Compiler will give us an error 

}

//need to print century
console.log(century);

//Challenge
//we will grab the code from challenge 1

const markWeight_D1 = 78;
const markHeight_D1 = 1.69;
const johnWeight_D1 = 92;
const johnHeight_D1 = 1.95;

const markBmi_D1 = markWeight_D1 / markHeight_D1 ** 2;
const johnBmi_D1 = johnWeight_D1 / (johnHeight_D1 * johnHeight_D1);


//basically to modify or pretty print outputs and logic to the console which we already did but now we know why :D
//also a second time, I went ahead and completed in the section due to the website already having a half ide to complete the challenge
if (markBmi_D1 > johnBmi_D1) {
    console.log(`Marks BMI (${markBmi_D1}) is higher then Johns (${johnBmi_D1})`);
}
    else {
        console.log('johns is higher')
    }