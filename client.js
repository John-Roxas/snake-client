const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    // IP and PORT values have been moved to the constants folder.
    host: IP,
    port: PORT
  });

  
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // If this message does not show, assume the connection went awry.
    console.log("Successfully connected to server");
    // Setting the name of the player.
    conn.write("Name: CRJ");
  });
  return conn;
};

console.log("Connecting ...");


module.exports = {
  connect: connect
};
