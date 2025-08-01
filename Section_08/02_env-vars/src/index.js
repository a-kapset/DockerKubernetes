const express = require('express');

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send(`Very kurwa nice! - ${process.env.APP_NAME}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
