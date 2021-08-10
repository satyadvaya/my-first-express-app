console.log('hello');
// imports are a little different in Node
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const data = require('./data.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/idiots', (req, res) => {
    console.log(req.query);
    // res.send(`Puppies are cute! Especially ${req.query.name}`);
    res.json(data);
});

app.get('/idiots/:id', (req, res) => {
    console.log(req.params.id);
    console.log(typeof req.params.id);
    const idiotID = Number(req.params.id);
    const idiot = data.find((item) => item.id === idiotID);
    console.log(idiot);
    // res.send(`Puppies are cute! Especially ${req.query.name}`);
    res.json(idiot);
});

module.exports = app;