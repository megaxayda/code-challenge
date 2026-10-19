const express = require("express");
const { createStore } = require("./store");

function createApp(store = createStore()) {
  const app = express();

  // Read JSON request bodies
  app.use(express.json());

  // CREATE - add a new item
  app.post("/items", (req, res) => {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ error: "name is required" });
    }
    res.status(201).json(store.create(name, description));
  });

  // READ - list all items (optional filter: /items?name=foo)
  app.get("/items", (req, res) => {
    res.json(store.list(req.query.name));
  });

  // READ - get one item by id
  app.get("/items/:id", (req, res) => {
    const item = store.get(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  });

  // UPDATE - change an existing item
  app.put("/items/:id", (req, res) => {
    const item = store.update(Number(req.params.id), req.body);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  });

  // DELETE - remove an item
  app.delete("/items/:id", (req, res) => {
    if (!store.remove(Number(req.params.id))) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(204).send();
  });

  return app;
}

module.exports = { createApp };
