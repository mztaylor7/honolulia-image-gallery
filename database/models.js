const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema({
  imageUrl: String,
  bigThumb: Boolean
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;