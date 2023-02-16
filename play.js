const net = require("net");
const {connect} = require("./client");

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
// Note

setupInput();
console.log("Connecting ...");
connect();