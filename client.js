const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to server");
    conn.write("Name: CRJ");
  });
  return conn;
};

console.log("Connecting ...");


module.exports = {
  connect: connect
};
