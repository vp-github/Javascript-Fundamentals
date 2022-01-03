//First and Second Challenge

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

/*const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;*/

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})!`);
}

//Third Challenge

const dolphines = (97 + 112 + 80) / 3;
const koalas = (109 + 95 + 50) / 3;
console.log(dolphines, koalas);

if (dolphines > koalas && dolphines >= 100) {
  console.log("Dolphins win the trophy ");
} else if (koalas > dolphines && koalas >= 100) {
  console.log("Koalas win the trophy ");
} else if (dolphines === koalas && dolphines >= 100 && koalas >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy");
}

//Fourth Challenge

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
