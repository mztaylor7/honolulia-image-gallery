const express = require('express');

const app = express();
const PORT = 3333;

const Images = require('../database/models.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/picture/bigThumb', (req, res) => {
  Images.findOne({houseId: 1})
    .then((thumbnail) => {
      res.json(thumbnail);
    })
    .catch((err) => {
      console.log('error: ', err);
    })
})

// app.get('/picture/bigThumb/list', (req, res) => {
//   Images.find({bigThumb: false})
//     .then((images) => {
//       res.json(images);
//     })
//     .catch((err) => {
//       console.log('error: ', err);
//     })
// })


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})