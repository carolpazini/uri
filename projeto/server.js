var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('Olá, Mundo!');});

app.listen(8080);
