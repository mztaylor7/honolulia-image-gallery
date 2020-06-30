const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 8001;

const Images = require('../database/models.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/picture/bigThumb/:id', (req, res) => {
  console.log(req.params.id)
  Images.findOne({houseId: req.params.id})
    .then((house) => {
      res.json(house);
    })
    .catch((err) => {
      console.log('error: ', err);
    })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})