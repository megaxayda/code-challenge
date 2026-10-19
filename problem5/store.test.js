// Unit tests: the store on its own, no HTTP involved
const test = require("node:test");
const assert = require("node:assert");
const { createStore } = require("./store");

test("create assigns increasing ids and defaults description", () => {
  const store = createStore();
  assert.deepStrictEqual(store.create("apple"), { id: 1, name: "apple", description: "" });
  assert.deepStrictEqual(store.create("pear", "green"), { id: 2, name: "pear", description: "green" });
});

test("list returns all items, or filters by name", () => {
  const store = createStore();
  store.create("apple");
  store.create("pineapple");
  store.create("pear");
  assert.strictEqual(store.list().length, 3);
  assert.deepStrictEqual(store.list("apple").map((i) => i.name), ["apple", "pineapple"]);
});

test("get returns the item, or undefined if missing", () => {
  const store = createStore();
  store.create("apple");
  assert.strictEqual(store.get(1).name, "apple");
  assert.strictEqual(store.get(99), undefined);
});

test("update changes only the given fields", () => {
  const store = createStore();
  store.create("apple", "red");
  assert.deepStrictEqual(store.update(1, { name: "green apple" }), {
    id: 1,
    name: "green apple",
    description: "red",
  });
  assert.deepStrictEqual(store.update(1, { description: "sweet" }), {
    id: 1,
    name: "green apple",
    description: "sweet",
  });
  assert.strictEqual(store.update(99, { name: "x" }), undefined);
});

test("remove deletes the item and reports whether it existed", () => {
  const store = createStore();
  store.create("apple");
  assert.strictEqual(store.remove(1), true);
  assert.strictEqual(store.get(1), undefined);
  assert.strictEqual(store.remove(1), false);
});
