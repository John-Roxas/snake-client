const IP = "localhost";
const PORT = 50541;
const moveKeys = function(key, conn) {
  switch (key) {
  case 'w': conn.write("Move: up");
    break;
  case 'a': conn.write("Move: left");
    break;
  case 's': conn.write("Move: down");
    break;
  case 'd': conn.write("Move: right");
    break;
  }
};



module.exports = {
  IP,
  PORT,
  moveKeys
};