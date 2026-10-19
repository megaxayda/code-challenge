// End-to-end test: start the real server and talk to it over HTTP
const test = require("node:test");
const assert = require("node:assert");
const { once } = require("node:events");

let server;
let BASE;

// Start the server through its real entry point, on a random free port
test.before(async () => {
  process.env.PORT = "0";
  server = require("./index");
  if (!server.listening) await once(server, "listening");
  BASE = `http://localhost:${server.address().port}`;
});

test.after(() => {
  server.close();
});

function request(method, url, body) {
  return fetch(BASE + url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body && JSON.stringify(body),
  });
}

test("full CRUD flow", async () => {
  // Create
  let res = await request("POST", "/items", { name: "apple", description: "red fruit" });
  assert.strictEqual(res.status, 201);
  const item = await res.json();
  assert.strictEqual(item.name, "apple");

  // Read one
  res = await request("GET", `/items/${item.id}`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), item);

  // List with filter
  res = await request("GET", "/items?name=app");
  assert.deepStrictEqual(await res.json(), [item]);

  // Update
  res = await request("PUT", `/items/${item.id}`, { name: "green apple" });
  assert.strictEqual(res.status, 200);
  assert.strictEqual((await res.json()).name, "green apple");

  // Delete
  res = await request("DELETE", `/items/${item.id}`);
  assert.strictEqual(res.status, 204);

  // Gone
  res = await request("GET", `/items/${item.id}`);
  assert.strictEqual(res.status, 404);
});

test("POST without name returns 400", async () => {
  const res = await request("POST", "/items", { description: "no name" });
  assert.strictEqual(res.status, 400);
  assert.deepStrictEqual(await res.json(), { error: "name is required" });
});

test("PUT and DELETE on a missing item return 404", async () => {
  assert.strictEqual((await request("PUT", "/items/9999", { name: "x" })).status, 404);
  assert.strictEqual((await request("DELETE", "/items/9999")).status, 404);
});
