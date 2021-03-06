const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host : IP,
    port : PORT

  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write("Name: PPM");
  });

  conn.on('connect',() => {
    conn.write("Move: up");
    conn.write("Move left");
    conn.write("Move right");
    conn.write("Move down");
  });

  conn.on('data',(data) => {
    console.log('It\'s got a sharp tongue, this server!',data)
  });

}


module.exports = connect;
