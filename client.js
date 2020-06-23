const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host : 'localhost',
    port : 50541
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


/*
  conn.on('connect',() => {
    setTimeout(() => {
      conn.write("Move: right");
    },2000)
  });
  */
 /*
 setTimeout(() => {
   conn.on('connect',() => {
     conn.write("Move: down");
   })
 },2000);
*/

  conn.on('data',(data) => {
    console.log('It\'s got a sharp tongue, this server!',data)
  });

}
/*
const handleUserInput = function() {
  const stdin = net.createConnection({
    host : 'localhost',
    port : 50541
  });
stdin.setEncoding('utf8')
stdin.on('data',(data) => {
  console.log("Caught interrupt ");

});

}
*/
 

module.exports = connect;
//module.exports = handleUserInput;