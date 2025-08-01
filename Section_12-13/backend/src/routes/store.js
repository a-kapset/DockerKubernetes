const express = require('express');
const { KeyValue } = require('../models/kv');

const kvRouter = express.Router();

kvRouter.post('/', async (req, res) => {
  const { key, value } = req.body;
  const existingKey = await KeyValue.findOne({ key });

  if (!key || !value) return res.status(400).json({ message: 'Both key and value are required' });
  if (existingKey) return res.status(400).json({ message: 'Provided key already exists' });

  const keyValue = new KeyValue({ key, value });
  await keyValue.save();

  return res.status(201).json({ message: 'Key-value pair stored successfully' });
});

kvRouter.get('/:key', (req, res) => {
  const { key } = req.params;

  console.log('GET ', key);

  return res.status(200).json({ message: `getting Key-value pair with key ${key}` });
});

kvRouter.delete('/:key', async (req, res) => {
  const { key } = req.params;

  await KeyValue.findOneAndDelete({ key });

  console.log('DELETE ', key);

  return res.status(204).json({ message: `deleting Key-value pair with key ${key}` });
});

module.exports = {
  kvRouter,
};
