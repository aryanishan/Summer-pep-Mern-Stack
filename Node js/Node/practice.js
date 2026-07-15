const fs = require('fs');

fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  fs.writeFile('hello2.txt', data, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully!');
  });
});