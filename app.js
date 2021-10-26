require('dotenv').config();
const Server = require('./models/server');

const server = new Server;

server.listen();


// const express = require('express')
// const app = express();
// const port = 3000;

// app.use(express.static('public'));

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// app.get('/nosotros', (req, res) => {
//   res.sendFile( __dirname + '/public/generic.html');
// });

// app.get('/nuestros-productos', (req, res) => {
//   res.sendFile( __dirname + '/public/elements.html');
// });

// app.get('*', (req, res) => {
//   res.send( '404 | Page Not Found');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });