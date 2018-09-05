const functions = require('firebase-functions');

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello world!').end();
});

exports.backend = functions.https.onRequest(server);
