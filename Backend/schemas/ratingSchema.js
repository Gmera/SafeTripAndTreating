const  mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: 'user'
    },
    place_id:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'place'
    },
    rating:{
        type: Number,
        required: true
    },
    comment: String
});

const ratingModule = mongoose.model('rating',ratingSchema);
module.exports = ratingModule;