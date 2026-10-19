# A crude server

A simple CRUD server built with Node.js and Express. Data is kept in memory, so it resets on restart.

## Run

```bash
npm install
npm start
```

Server starts at http://localhost:3000

## Test

Uses Node's built-in test runner, no extra dependencies.

```bash
npm test             # all tests
npm run test:unit    # unit tests (store.test.js, config.test.js)
npm run test:e2e     # end-to-end tests over real HTTP (e2e.test.js)
npm run coverage     # all tests + coverage report, fails below 100%
```

## Endpoints

| Method | Path         | What it does                              |
|--------|--------------|-------------------------------------------|
| POST   | /items       | Create an item (`{ "name", "description" }`) |
| GET    | /items       | List items (optional `?name=` filter)     |
| GET    | /items/:id   | Get one item                              |
| PUT    | /items/:id   | Update an item                            |
| DELETE | /items/:id   | Delete an item                            |

## Example

```bash
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name":"apple","description":"red fruit"}'
curl http://localhost:3000/items
curl -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name":"green apple"}'
curl -X DELETE http://localhost:3000/items/1
```
