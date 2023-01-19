const express = require('express');


const app = express();

const port = 8000;


app.get("/hello",(req,res)=>{
    // res.send("hello world")
    res.status(200).json({
        message:"successful in fetching data",
        data:" i am data and"
    })
});




app.listen(port, ()=>{console.log(`app is up and running on port: ${port}`)})
