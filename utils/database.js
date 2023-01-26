const mongoose = require("mongoose");

require('dotenv').config()

mongoose.set( "strictQuery", false );

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(()=>console.log("databse connected!!"))
.catch(error=>console.log("error while conneting to database", error));






const db = mongoose.connection;

module.export = db;




// const mongodb = require('mongodb');


// const MongoClient = mongodb.MongoClient;


// const mongoConnect = (callback)=>{

//     MongoClient.connect('mongodb+srv://ashutosh:Ashu1150@cluster0.folfixr.mongodb.net/?retryWrites=true&w=majority')
//     .then((data)=>{
//         console.log("db connection succesfull")
//      callback(data)
//     })
//     .catch((error)=>{console.log("error in seting up db",error)})

// }

// module.exports = mongoConnect;