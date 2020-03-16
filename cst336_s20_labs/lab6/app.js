const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req,res){
    //res.send("It works!");
    res.render("index.html");
});

app.get("/mercury", function(req,res){
    //res.send("This will be Mercury web page!");
    res.render("mercury.html");
});

app.get("/venus", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("venus.html");
});

app.get("/earth", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("earth.html");
});

app.get("*", function(req,res){
    //res.send("Page Not Found");
    res.render("error.html");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running");
});