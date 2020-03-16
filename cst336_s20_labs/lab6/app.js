// JavaScript File
const express = require("express");
const app = express();
// app.engine('html', require("ejs").renderFile);
app.engine('html', require('ejs-locals'));
app.use(express.static("public"));

// routes 
app.get("/", function(req, res){
   res.render("index.ejs"); 
    
});
app.get("/mercury", function(req,res){
    res.render("mercury.ejs");
});
app.get("/venus", function(req,res){
    res.render("venus.ejs");
});
app.get("/pluto", function(req,res){
    res.render("pluto.ejs");
});


// server listner 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});