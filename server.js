const express = require('express');
const path = require('path');
const db = require('./db')

const app = express();
const PORT = process.env.PORT || 3000
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/products', (req, res) => {
  db.readJSON('./products.json')
    .then(response => res.send(response))
    .catch(err => res.send(err))
});

app.get('/companies', (req, res) => { 
  db.readJSON('./companies.json')
    .then(response => res.send(response))
    .catch(err => res.send(err))
});

app.listen(PORT, () => console.log('Listening on ', PORT));