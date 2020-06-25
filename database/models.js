const mongoose = require('mongoose');
const db = require('./index.js')
mongoose.Promise = global.Promise;

const imagesSchema = new mongoose.Schema({
  images: [String],
  bigThumb: String,
  address: String,
  price: Number,
  beds: Number,
  baths: Number,
  houseId: {type: Number, unique: true, min: 1}
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;