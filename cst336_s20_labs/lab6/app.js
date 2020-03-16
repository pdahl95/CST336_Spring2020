const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

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

app.get("/pluto", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("pluto.html");
});



//server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running");
});