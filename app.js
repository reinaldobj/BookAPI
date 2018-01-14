var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', getCallback);

app.listen(port, listenCallback);

function listenCallback() {
    console.log('Gulp is running my app on PORT:' + port);
}

function getCallback(req, res) {
    res.send('Welcome to my API');
}