const person = {
  firstName: "Shimu",
  lastName: "Ziasmin",
  age: 25,
};

const keysArr = Object.keys(person);

// for (let item of keysArr) {
//   console.log(person[item]);
// }

const valArr = Object.values(person);

const entriesVal = Object.entries(person);
console.log("entriesVal", entriesVal);
