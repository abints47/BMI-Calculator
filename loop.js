let i = 0;
for (i; i < 10; i++) {
  console.log(i);
}

console.log("mmultiplication table of 2 ");
let j = 2;
for (j; j <= 20; j += 2) {
  console.log(j);
}

console.log("right angle Triangle");
let row = 10;
for (let i = 0; i <= row; i++) {
  console.log(`*`.repeat(i));
}

console.log("Inverted right Angle triangle");

let rows = 10;

for (let i = rows; i >= 1; i--) {
  console.log(`*`.repeat(i));
}
console.log("Centered Pyramid");

let rowss = 5;

for (let i = 1; i <= rowss; i++) {
    let space = "";
    let star = "";

    // Build the leading spaces
    for (let j = 1; j <= rowss - i; j++) {
        space += " ";
    }

    // Build the stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        star += "*";
    }

    console.log(space + star);
}
