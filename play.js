const net = require("net");

const connect = function(data) {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();