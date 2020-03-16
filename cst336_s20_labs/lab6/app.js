// JavaScript File
var express = require('express')
  , partials = require('express-partials')
  , app = express();

app.engine('html', require("ejs").renderFile);
app.use(express.static("public"));
app.use(partials());

// routes 
app.get('/',function(req,res,next){
  res.render('index.ejs') 
  // -> render layout.ejs with index.ejs as `body`.
})


// app.get("/", function(req, res){
//   res.render("index.html"); 
// });
// app.get("/mercury", function(req,res){
//     res.render("mercury.html");
// });
// app.get("/venus", function(req,res){
//     res.render("venus.html");
// });
// app.get("/pluto", function(req,res){
//     res.render("pluto.html");
// });


// server listner 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});