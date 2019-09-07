var express = require('express'),
    CodeBreaker = require('../app/./code-breaker');

var app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "");
    res.header("Access-Control-Allow-Headers", "");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.get('/setsecret/:secret', function(req, resp) {
    number = req.params.secret;
    CodeBreaker.setSecret(number);
    resp.send({ message: 'ok, let the game begin' })
});

app.get('/guess/:number', function(req, resp) {
    number = req.params.number;
    resp.send({ result: CodeBreaker.guess(number) })
});

app.get('/upgrade/', function(req, resp) {
    resp.send({ result: CodeBreaker.guess(number) })
});

app.get('/delete/', function(req, resp) {
    resp.send({ result: CodeBreaker.guess(number) })
});

module.exports = app;