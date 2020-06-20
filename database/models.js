const mongoose = require('mongoose');
const db = require('./index.js')
mongoose.Promise = global.Promise;

const imagesSchema = new mongoose.Schema({
  images: [String],
  bigThumb: String,
  houseId: {type: Number, unique: true, min: 1}
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;