const day = "monday";

switch (day) {
  case "monday": //for day === 'monday'
    console.log(`Here's the first activity`);
    break;
  case "Tuesday":
    console.log(`Here's the Tuesday's activity`);
    break;
  case "Wednesday":
    console.log(`Here's the Wednesday's activity`);
    break;
  case "Thrusday":
    console.log("Here's the Thursday's activity");
    break;
  case "Friday":
  case "Saturday":
    console.log("Its time for Fri Sat holiday");
    break;
  default:
    console.log("This is the invalid day");
}

// if (day === "monday") {
//   console.log("Here's the first activity");
// }

//Expression is piece of code that expresses value:

//ternary operators

//conditional operator
const age = 23;
age >= 20 ? console.log("I can drink wine") : console.log("I can drink water!");
const drink = age >= 18 ? "Water" : "Wineee!";
console.log(drink);

//coding challenge
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}
Tip was ${tip}
Total is ${bill + tip}`);
