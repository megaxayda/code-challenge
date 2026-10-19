const { sumLoop, sumFormula, sumRecursive } = require("./sum");

const n = Number(process.argv[2]) || 5;

console.log(`Sum from 1 to ${n}:`);
console.log("Loop:     ", sumLoop(n));
console.log("Formula:  ", sumFormula(n));
console.log("Recursive:", sumRecursive(n));
