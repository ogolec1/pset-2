const readlineSync = require("readline-sync");

const MILLIMETERS_PER_INCH = 25.4;

let width = readlineSync.question("Width:\n");
let length = readlineSync.question("Length:\n");

let widthMM = width * MILLIMETERS_PER_INCH;
let lengthMM = length * MILLIMETERS_PER_INCH;
let area = widthMM * lengthMM;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});


console.log("\n A(n) " + width + "-by-" + length +" inch sheet of paper has an area of " + area + " square millimeters.");
