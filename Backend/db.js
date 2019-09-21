const mongoose = require('mongoose');
const userModule = require('./schemas/userSchema');
const placeModule = require('./schemas/placeSchema');
const ratingModule = require('./schemas/ratingSchema');

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open',()=>{
    console.log('Hurray');
})