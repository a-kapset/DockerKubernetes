const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello from notebooks' });
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to DB.');
    app.listen(PORT, () => {
      console.log(`Notebooks server is listening on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error('!!! ERROR !!!');
    console.error(err);
  });
