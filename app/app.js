var express = require('express'),
    CodeBreaker = require('../app/./code-breaker');

var app = express();

app.get('/setsecret/:secret', function(req, resp) {
    number = req.params.secret;
    CodeBreaker.setSecret(number);
    resp.send({ message: 'ok, let the game begin' })
});

app.get('/guess/:number', function(req, resp) {
    number = req.params.number;
    resp.send({ result: CodeBreaker.guess(number) })
});

module.exports = app;