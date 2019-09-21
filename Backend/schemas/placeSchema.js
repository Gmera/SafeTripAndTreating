const  mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    id:{type: Schema.Types.ObjectId, required: true},
    title:{type: String, required: true}
});

const placeModule = mongoose.model('place',placeSchema);
module.exports = placeModule;