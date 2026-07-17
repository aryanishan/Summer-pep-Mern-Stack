const express = require('express');

const { logger } = require('./middleware/logger');

const app = express();

app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});