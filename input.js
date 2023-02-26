
const { moveKeys } = require('./constants');

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // Needed to declare one single movementInterval which will allow the snake to keep moving in a direction once the player presses a key.
  let movementInterval;
  const handleUserInput = function(key) {
    
    // If you press CTRL + c, it will exit the application.
    if (key === '\u0003') {
      process.exit();
    }
    // Clear the interval as soon as a key is pressed!
    clearInterval(movementInterval);
    // Movement keys mapped to WASD. Actual commands are stored in constants.js.
    movementInterval = setInterval(() => moveKeys(key, conn), 150);
    
    
    //
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

