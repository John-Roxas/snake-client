const net = require("net");

const connect = function(data) {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to server");
    conn.write("Name: CRJ");
  });
  return conn;
};

console.log("Connecting ...");

const client = {
  connect: connect
};

module.exports = client;
