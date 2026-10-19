// In-memory "database" (resets when the server restarts)
function createStore() {
  let items = [];
  let nextId = 1;

  return {
    create(name, description) {
      const item = { id: nextId++, name, description: description || "" };
      items.push(item);
      return item;
    },

    // Optional filter: only items whose name contains the given text
    list(name) {
      if (name) {
        return items.filter((i) => i.name.includes(name));
      }
      return items;
    },

    get(id) {
      return items.find((i) => i.id === id);
    },

    // Returns the updated item, or undefined if not found
    update(id, { name, description }) {
      const item = items.find((i) => i.id === id);
      if (!item) return undefined;
      if (name !== undefined) item.name = name;
      if (description !== undefined) item.description = description;
      return item;
    },

    // Returns true if the item was removed
    remove(id) {
      const index = items.findIndex((i) => i.id === id);
      if (index === -1) return false;
      items.splice(index, 1);
      return true;
    },
  };
}

module.exports = { createStore };
