const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host : 'localhost',
    port : 50541
  });
  conn.setEncoding('utf8');
  //return conn;
  conn.on('data',(data) => {
    console.log('It\'s got a sharp tongue, this server!',data)
  })
}

console.log('Connecting...');

connect();
