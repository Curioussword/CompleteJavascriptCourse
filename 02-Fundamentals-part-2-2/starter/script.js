//an object is similar to an array with the exception that you are assigning a key value to your arrays and one object can obviously store multiple arrays becouse its javascript
//key values end with a comma


//example

const chris = {

    firstName: 'Chris',
    lastName: 'Reed',
    age: 2026 - 1992,
    job: 'learner',
    friends: ['casey', 'george', 'patrick']

};

//this object named chris, has 5 properties - objects are the most fundamental concept in javacsript and the example above is known as a object literal with the curly braces and is most easiest
// the key differences between arrays and objects, is that objects values can be retrieved in any order - it does not matter.

//example to call a key from the object
console.log(chris.firstName);
//another way to call a property
console.log(chris['lastName']);

//here we can take any variable name and assign it to a partial of our key in objects
//example
const nameKey = 'Name';
console.log(chris['first' + nameKey]); // which should = chris... confusing becouse the key is chris, so is the object name

//also we can call any key from a prompt by using a variable but in a fashion that also can only be used using []
/* const interestedIn = prompt('What do you wanting to know about chris? firstname, lastname, job, friends or?')
console.log(chris[interestedIn]); */

/* if (chris[interestedIn]) {
    console.log(chris[interestedIn]);
} else {
    console.log('your input does not exist! Choose between firstName, lastname, age, job, and friends');
} */

//challenge #3

const mark = {
    fullname: "mark",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullname: "john",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

if (mark.calcBMI < john.calcBMI) {
    console.log(`Johns Smiths BMI ${john.calcBMI} is higher than Mark Miller's ${mark.calcBMI}`)
} else {
    console.log(`marks is higher `)
}

mark.calcBMI();
john.calcBMI();
console.log(john.bmi);