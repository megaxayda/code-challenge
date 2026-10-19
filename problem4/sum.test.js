const test = require("node:test");
const assert = require("node:assert");
const { sumLoop, sumFormula, sumRecursive } = require("./sum");

const functions = { sumLoop, sumFormula, sumRecursive };

for (const [name, sum] of Object.entries(functions)) {
  test(`${name} sums 1 to n`, () => {
    assert.strictEqual(sum(1), 1);
    assert.strictEqual(sum(5), 15);
    assert.strictEqual(sum(100), 5050);
  });

  test(`${name} returns 0 for n = 0`, () => {
    assert.strictEqual(sum(0), 0);
  });
}
