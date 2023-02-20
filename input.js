let connection;
const { moveKeys } = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    // If you press CTRL + c, it will exit the application.
    if (key === '\u0003') {
      process.exit();
    }

    // Movement keys mapped to WASD. Actual functionality is stored in constants.js.
    moveKeys(key, conn);
    
    if (key === 't') {
      conn.write("Say: Time to die");
    }
    
  };
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = {
  setupInput: setupInput
};

