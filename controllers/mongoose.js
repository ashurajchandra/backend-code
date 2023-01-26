const mongoose = require('mongoose');

require('dotenv').config()

mongoose.set( "strictQuery", false );

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(()=>console.log("db connected!!"))
.catch((error)=>console.log('error in setting up db',error))


const db = mongoose.connection;

module.exports = db;