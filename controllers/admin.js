

module.exports.getProduct = (req,res)=>{
    // res.send("<h1>Inside add product route</h1>")
    res.send("<form action=/product method=POST> <input type=text name=title /></form>")
}



module.exports.getHello = (req,res)=>{
    res.status(200).json({
        message:"successful in fetching data",
        data:" i am data and"
    })
}

module.exports.postProduct = (req,res)=>{
    console.log("req", req.body)
    res.redirect("/")
}