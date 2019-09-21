const  mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {type: Schema.Types.ObjectId, required:true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true} // this needs to be hashed
});

const userModule = mongoose.model('userModule',userSchema);
module.exports = userModule;