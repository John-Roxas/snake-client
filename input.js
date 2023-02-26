const { moveKeys } = require('./constants');
// Connection needs to be in the outermost scope so it can be used by everything else!
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // Needed to declare one single movementInterval which will allow the snake to keep moving in a direction once the player presses a key.
  let movementInterval;
  let direction;
  const handleUserInput = function(key) {
    
    // If you press CTRL + c, it will exit the application.
    if (key === '\u0003') {
      process.exit();
    }

    // Wrote this if statement that will not allow the player to attempt to move in a direction opposite to how the snake is traveling!
    if (key === 'a' && direction !== 'd' || key === 'd' && direction !== 'a' || key === 'w' && direction !== 's' || key === 's' && direction !== 'w') {
      // Clear the interval as soon as a key is pressed!
      clearInterval(movementInterval);
      // Movement keys mapped to WASD. Actual commands are stored in constants.js.
      movementInterval = setInterval(() => moveKeys(key, conn), 50);
      direction = key;
    }

    // My single communication function.
    if (key === 't') {
      conn.write("Say: Good luck!");
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

