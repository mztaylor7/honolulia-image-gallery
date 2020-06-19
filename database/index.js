const mongoose = require('mongoose');
var DATABASE_URL = 'mongodb://localhost:27017/image_gallery';

const db = mongoose.connect(DATABASE_URL);

module.exports = db;