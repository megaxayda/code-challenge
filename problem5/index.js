const { createApp } = require("./app");
const { getPort } = require("./config");

const server = createApp().listen(getPort(), () => {
  console.log(`Server running at http://localhost:${server.address().port}`);
});

// Exported so tests can find the port and shut the server down
module.exports = server;
