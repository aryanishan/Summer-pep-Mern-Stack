const express = require('express');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
  return;
});

app.post('/signup', (req, res) => {
  const data = req.body;
  console.log("Data: ", data);

  const users = JSON.parse(await fs.readfile("../data/users.json", "utf-8"));
  console.log("Users: ", users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

})