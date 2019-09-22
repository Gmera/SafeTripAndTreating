const mongoose = require('mongoose');
const userModule = require('./schemas/userSchema');
const placeModule = require('./schemas/placeSchema');
const ratingModule = require('./schemas/ratingSchema');

const mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open',()=>{
    var dummyUser = new userModule({id:0,name:"nemo",email:"nemo@gmail.com",passwrod:"****"});
    dummyUser.save((err)=>{
        if(err){
            console.log('you suck')
        }
    });
    console.log('Hurray');
})