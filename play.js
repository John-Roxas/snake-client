const client = require('./client.js');
client.connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  };
  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  

  return stdin;
};
setupInput();