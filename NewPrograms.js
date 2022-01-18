// // // // // // // // // const fixAge = 16;
// // // // // // // // // console.log(fixAge);

// // // // // // // // // let ageOfManu = fixAge - 7;
// // // // // // // // // let ageOfMrunu = fixAge - 3;
// // // // // // // // // console.log(ageOfManu, ageOfMrunu);

// // // // // // // // // if (ageOfManu <= ageOfMrunu) alert("Manali is elder sister of Mrunu");
// // // // // // // // // console.log("Manali is younger sister of Mrunu");

// // // // // // // // //For Test DATA 1
// // // // // // // // let x = (weightOfMark = 78);
// // // // // // // // let y = (weightOfJohn = 92);
// // // // // // // // console.log("Weight of Mark is" + " " + x + "Kg");
// // // // // // // // console.log("Weight of John is" + " " + y + "Kg");

// // // // // // // // let heightOfMark = 1.69;
// // // // // // // // let heightOfJohn = 1.95;
// // // // // // // // console.log("Height of Mark is" + " " + heightOfMark + "m");
// // // // // // // // console.log("Height of John is" + " " + heightOfJohn + "m");

// // // // // // // // let bmiOfMark = x / heightOfMark ** 2; //mass / (height * height)
// // // // // // // // let bmiOfJohn = x / (heightOfJohn * heightOfJohn);
// // // // // // // // console.log("Mark's BMI" + " " + bmiOfMark);
// // // // // // // // console.log("John's BMI" + " " + bmiOfJohn);
// // // // // // // // const markHigherBMI = bmiOfMark > bmiOfJohn;
// // // // // // // // console.log(markHigherBMI);

// // // // // // // // //case 2
// // // // // // // // // let x = 95;
// // // // // // // // // let y = 85;
// // // // // // // // // console.log(x, y);
// // // // // // // const firstName = "Manasi";
// // // // // // // const age = 1997;
// // // // // // // const year = 2021;

// // // // // // // const manasi = "I'm " + firstName + ", a  " + (year - age) + " year old girl.";
// // // // // // // console.log(manasi);

// // // // // // // const manasiNew = `I'm ${firstName}, a ${year - age} old girl.`;
// // // // // // // console.log(manasiNew);
// // // // // // // console.log("Just a normal string..");

// // // // // // // console.log("String \n with multiple \n lines");

// // // // // // // console.log(`String
// // // // // // // always
// // // // // // // works
// // // // // // // the
// // // // // // // bestttt..`);

// // // // // // const age = 14;

// // // // // // if (age >= 18) {
// // // // // //   console.log(`Sarah is eligible to use driving license🚗`);
// // // // // // } else {
// // // // // //   const yearsLeft = 18 - age;
// // // // // //   console.log(`Sarah is too young. Wait another ${yearsLeft} Years`);
// // // // // // }

// // // // // // //if else control structure
// // // // // // // if (){

// // // // // // // } else {

// // // // // // // }

// // // // // const birthYear = 1997;
// // // // // let century;
// // // // // if (birthYear >= 2000) {
// // // // //   century = 20;
// // // // // } else {
// // // // //   century = 21;
// // // // // }
// // // // // console.log(century);

// // // // const markBMI = 28.3;
// // // // console.log(`Mark's BMI is ${markBMI}`);
// // // // const johnBMI = 23.9;
// // // // console.log(`John's BMI is ${johnBMI}`);

// // // // if (markBMI > johnBMI) {
// // // //   console.log(`Mark's BMI is higher than John's BMI!`);
// // // // } else {
// // // //   console.log(`Mark's BMI is less than John's BMI!`);
// // // // }

// // // //TYPE CONVERSION
// // // //coversion is where we manually change string to number or number to string.
// // // //coersion means where string or number is automatically coverted. conversion does not work on boolean values
// // // const inputYear = "1997";
// // // //coversion of number to string

// // // console.log(Number(inputYear));
// // // console.log(Number(inputYear) + 10);

// // // console.log(typeof Number(inputYear));

// // // //coversion of String to number
// // // console.log(String(1997), 1997);
// // // console.log(typeof String(1997), typeof 1997);

// // // //TYPE COERCION
// // // console.log("I am" + 23 + "Years old.");

// // // console.log("23" + "10" + 3); //in this case, plus operator converts numbers to the string. thats why numbers in inverted commas are converted to strings and concatenation happens

// // // console.log("23" - "10" - 3); //in this case, the minus operator actually triggers the opposite conversion. so in this case, strings are converted to numbers and not the other way around

// // // console.log("23" * "2");

// // // //guess the output

// // // let n = "1" + 1; //output is '11'. String '1' and 1 number is concatenated
// // // n = n - 1; //n value is substracted by 1
// // // console.log(n); // output is printed as 10

// // // // guess the output

// // // let m = 10 + 1 + "1";
// // // m = m--;
// // // console.log(m);

// // // //truthy and falsy values

// // // // there are only 5 falsy values, 0, '', undefined, null, NaN

// // // console.log(Boolean("Jonas"));
// // // console.log(Boolean("0"));
// // // console.log(Boolean(undefined));
// // // console.log(Boolean(NaN));
// // // console.log(Boolean());

// // // // example of coercion with if else structure

// // // const money = 10;

// // // if (money) {
// // //   console.log("Don't spend it alll...:)");
// // // } else {
// // //   console.log("Go get a job!");
// // // }

// // // let weight;
// // // if (weight) {
// // //   console.log("YAY! its your weight!");
// // // } else {
// // //   console.log("Height is UNDEFINED!");
// // // }

// // //equality operators - how do they work!?

// // // const age = 18;

// // // if (age === 18) console.log("You just became an adult :)");

// // const favourite = Number(prompt("Whats your favourite Number?")); // with Number, it converts string into number
// // console.log(favourite);
// // console.log(typeof favourite);

// // if (favourite === 23) {
// //   //23 === 23
// //   console.log("Yes, we got the exact number..");
// // } else {
// //   console.log("This isnt the exact number...🤔");
// // }

// // const currentAge = prompt("Whats your current age");
// // if (currentAge === 18) {
// //   console.log(`my current age is 18`);
// // } else {
// //   console.log(`my current age is greater than 18`);
// // }

// const favourite = prompt("Whats your favourite Number");
// if (favourite !== 1997) console.log("Why not 1997");

//{Basic Boolean Logic}
//AND, OR, NOR Operators
//example :
//A. Sarah ahs a driving license , B. Sarah has a good vision
