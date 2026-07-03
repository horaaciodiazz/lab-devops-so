const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain').send('Hola Mundo DevOps');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;
