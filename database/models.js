const mongoose = require('mongoose');
const db = require('./index.js')
mongoose.Promise = global.Promise;

const imagesSchema = new mongoose.Schema({
  imageUrl: String,
  bigThumb: Boolean
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;