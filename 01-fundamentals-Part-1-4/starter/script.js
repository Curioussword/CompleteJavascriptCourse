//started with challenge 4, but I will do it in a separate file to keep things clean and organized.


console.log("UPDATED VERSION — " + new Date().toLocaleTimeString());


const bill = 430;
let tip; // Declare tip outside so it's accessible later

bill >= 50 && bill <= 300 ? tip = bill * 0.15 :tip = bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



console.log("Hello openclaw!");