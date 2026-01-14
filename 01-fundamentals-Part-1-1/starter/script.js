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
//calculate average
const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);
//so the results show the average is not really true between the two ages. So we could use parantheses to ensure adding the two ages happens first before division
const averageAge_p = (ageJonas + ageSarah) / 2 // just to show the example
console.log(averageAge_p) // seems lot more accurate - just to note the table shows the precendance 21 which means it is indeed the highest


// coding challenge
const markWeight_D1 = 78;
const markHeight_D1 = 1.69;
const johnWeight_D1 = 92;
const johnHeight_D1 = 1.95;

/*
const markWeight_D2 = 95;
const markHeight_D2 = 1.88;
const johnWeight_D2 = 85;
const johnHeight_D2 = 1.76;
*/
const markBmi_D1 = markWeight_D1 / markHeight_D1 ** 2;
const johnBmi_D1 = johnWeight_D1 / (johnHeight_D1 * johnHeight_D1);


if (markBmi_D1 > johnBmi_D1) {
    console.log(`Marks BMI (${markBmi_D1}) is higher then Johns (${johnBmi_D1})`);
}
    else {
        console.log('johns is higher')
    }




