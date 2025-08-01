const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Very kurwa nice!');
});

app.get('/users', (req, res) => {
  return res.json({ users });
});

app.post('/users', (req, res) => {
  const newUserId = req.body.userId;
  if (!newUserId) return res.status(400).send('Missing userId');
  if (users.includes(newUserId)) return res.status(400).send('userId already exists');
  users.push(newUserId);

  return res.sendStatus(201).send('User registered');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
