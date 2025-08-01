import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send(`Very kurwa nice!`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
