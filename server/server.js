const express = require('express');
// añadiendo socket install(npm i socket.io)
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
//con socket.io
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));




//app.listen(port, (err) => {
//socket.io	
module.exports.io = socketIO(server);//comunicacion con el backend
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});