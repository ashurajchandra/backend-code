const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const postSchema = new Schema({
    title:{
        type:String,
        required:true
    },

    imageUrl:{
        type:String,
    }
},{timestamps:true})



module.exports = mongoose.model('Post', postSchema)



