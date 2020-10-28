'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//------------------------------------
// Client handling
//------------------------------------

app.use(express.static(path.join(__dirname, '../ocean-templates')));

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, '../ocean-templates/index.html'));
});


//------------------------------------
// 404 handling
//------------------------------------

app.use((req, res) => {
  res.status(404).send('Not Found');
});


//------------------------------------
// error handling
//------------------------------------

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  } else {
    console.error(err);
    res.status(500).send(err.response || 'Something broke!');
  }
});


//------------------------------------
// start server
//------------------------------------

if (module === require.main) {
  const server = app.listen(9393, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;