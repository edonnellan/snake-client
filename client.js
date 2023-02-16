const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // const snakeMovements = ["Move: up", "Move: left", "Move: down", "Move: left", "Move: down", "Move: right"];
  let moveTimer = 50;

  conn.on("connect", () => {
    conn.write("Name: SSS");
    
    for (const move of snakeMovements) {
      setInterval(() => {
        conn.write(move);
      }, moveTimer += 500)
    }
  });


  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};