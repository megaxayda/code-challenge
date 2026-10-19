const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Read JSON request bodies
app.use(express.json());

// In-memory "database" (resets when the server restarts)
let items = [];
let nextId = 1;

// CREATE - add a new item
app.post("/items", (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  const item = { id: nextId++, name, description: description || "" };
  items.push(item);
  res.status(201).json(item);
});

// READ - list all items (optional filter: /items?name=foo)
app.get("/items", (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.json(items.filter((i) => i.name.includes(name)));
  }
  res.json(items);
});

// READ - get one item by id
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

// UPDATE - change an existing item
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  const { name, description } = req.body;
  if (name !== undefined) item.name = name;
  if (description !== undefined) item.description = description;
  res.json(item);
});

// DELETE - remove an item
app.delete("/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
