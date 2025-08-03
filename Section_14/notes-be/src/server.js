const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello from notes' });
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to DB.');
    app.listen(PORT, () => {
      console.log(`Notes server is listening on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error('!!! ERROR !!!');
    console.error(err);
  });
