// Port to listen on: PORT env var, or 3000 by default
function getPort(env = process.env) {
  return env.PORT || 3000;
}

module.exports = { getPort };
