// Three ways to compute 1 + 2 + ... + n

// 1. Loop: add each number one by one. O(n) time, O(1) space.
function sumLoop(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// 2. Formula (Gauss): n * (n + 1) / 2. O(1) time, O(1) space.
function sumFormula(n) {
  return (n * (n + 1)) / 2;
}

// 3. Recursion: n + sum of (n - 1). O(n) time, O(n) stack space.
function sumRecursive(n) {
  if (n <= 0) return 0;
  return n + sumRecursive(n - 1);
}

module.exports = { sumLoop, sumFormula, sumRecursive };
