'use strict';
const path = require('path');
const PORT = 3377;

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/docs/index.html'));
});
app.use("/docs", express.static(path.join(__dirname, 'docs')));
app.use("/01-1.peerVideoChat", express.static(path.join(__dirname, 'docs/01-1.peerVideoChat')));
app.use("/01-2.peerHelloSender", express.static(path.join(__dirname, 'docs/01-2.peerHelloSender')));
app.use("/01-3.peerHelloReceiver", express.static(path.join(__dirname, 'docs/01-3.peerHelloReceiver')));
app.use("/02-1.skywayVideoChat", express.static(path.join(__dirname, 'docs/02-1.skywayVideoChat')));
app.use("/02-2.skywayHelloSender", express.static(path.join(__dirname, 'docs/02-2.skywayHelloSender')));
app.use("/02-3.skywayHelloReceiver", express.static(path.join(__dirname, 'docs/02-3.skywayHelloReceiver')));

app.use("/assets", express.static(path.join(__dirname, 'docs/assets')));

app.listen(PORT);
console.log('listening on port ' + PORT);