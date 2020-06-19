const express = require('express');

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/helloworld', (req, res) => {
  console.log('Hello World');
  res.end();
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})