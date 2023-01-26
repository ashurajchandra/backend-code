const express = require('express');


const app = express();

const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const adminRoute = require("./routes/admin");
const errorController = require("./controllers/error");
const db = require('./utils/database');
const postRoute = require('./routes/post');
const authRoute = require("./routes/auth")



app.use("/test",postRoute)

app.use(adminRoute);
app.use("/auth",authRoute)


app.get("/add-ashu", (req,res,next)=>{
    console.log("inside add product")
    res.send('<form action=/product method=POST> <input type=text name=title > </form>')
    // res.send('hello')
    //res.send("<h1>Inside add product</h1>")
})

// app.use("/product", (req, res)=>{
//     console.log("req", req.body);
//     res.redirect("/")

// })


app.use("/", (req, res)=>{
   
    res.send("<h1>Welcome to homepage</h1>")

})
app.use(errorController.getError)
// app.use((req,res)=>{
//     res.send('<h1>Page does not exist</h1>')
// })


// mongoConnect((data)=>{
//     // console.log("data",data)
//     app.listen(port, ()=>{console.log(`app is up and running on port: ${port}`)})
// })

app.listen(port, ()=>{console.log(`app is up and running on port: ${port}`)})
