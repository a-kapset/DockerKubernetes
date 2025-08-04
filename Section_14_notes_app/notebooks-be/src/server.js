const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { notebookRouter } = require('./routes');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/api/notebooks', notebookRouter);

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
