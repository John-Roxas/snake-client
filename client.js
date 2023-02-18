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
  conn.on("connect", () => {
    setTimeout(() => {
      // conn.write("Move: down");
      // conn.write("Move: down");
      // conn.write("Move: down");
    }, 500);

    setInterval(() => {
      // conn.write("Move: left");
    }, 50);
    
  });
  return conn;
};

console.log("Connecting ...");

const client = {
  connect: connect
};

module.exports = client;
