const readlineSync = require("readline-sync");

const MILLIMETERS_PER_INCH = 25.4;

let width = readlineSync.question("Width:");
let length = readlineSync.question("Length:");

let widthMM = width * MILLIMETERS_PER_INCH;
let lengthMM = length * MILLIMETERS_PER_INCH;
let area = widthMM * lengthMM;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});


console.log("\nA(n) " + width + "-by-" + length +" inch sheet of paper has an area of " + area + " square millimeters.");
