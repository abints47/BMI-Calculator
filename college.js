const college = "Nehru College";
const name = "Abin";
let age = 19;
let sub1 = 80;
let sub2 = 75;
let sub3 = 85;
let hostel = true;

let total = sub1 + sub2 + sub3;
let percentage = (total / 300) * 100;

console.log(`College: ${college}`);
console.log(`Name: ${name} | Age: ${age} | Total: ${total}/300 | Percentage: ${percentage.toFixed(2)}%`);
console.log(`Hostel Resident: ${hostel}`);

console.log(`typeof college -> ${typeof college}`);
console.log(`typeof name -> ${typeof name}`);
console.log(`typeof age -> ${typeof age}`);
console.log(`typeof sub1 -> ${typeof sub1}`);
console.log(`typeof sub2 -> ${typeof sub2}`);
console.log(`typeof sub3 -> ${typeof sub3}`);
console.log(`typeof hostel -> ${typeof hostel}`);

console.log('5' + 3);
console.log('5' - 3);