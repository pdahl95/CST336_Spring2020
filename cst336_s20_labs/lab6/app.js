// JavaScript File
const express = require("express");
const app = express();
app.engine('html', require("ejs").renderFile);
app.use(express.static("public"));

// routes 
app.get("/", function(req, res){
   res.render("index.html"); 
    
});
app.get("/mercury", function(req,res){
    res.render("mercury.html");
});
app.get("/venus", function(req,res){
    res.render("venus.html");
});
app.get("/pluto", function(req,res){
    res.render("pluto.html");
});


// server listner 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});