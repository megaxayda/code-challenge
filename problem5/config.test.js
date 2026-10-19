// Unit tests: port selection
const test = require("node:test");
const assert = require("node:assert");
const { getPort } = require("./config");

test("getPort uses PORT when set", () => {
  assert.strictEqual(getPort({ PORT: "8080" }), "8080");
});

test("getPort defaults to 3000", () => {
  assert.strictEqual(getPort({}), 3000);
});
