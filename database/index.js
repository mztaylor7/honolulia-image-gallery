const mongoose = require('mongoose');

var DATABASE_URL = 'mongod://localhost:3333/mongodb-server';

const Images = require('./models.js');

const db = mongoose.connect(DATABASE_URL);

const models = Images;

module.exports = db;
module.exports = models;