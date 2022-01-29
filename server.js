

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package


app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
app.get('/aboutus', function (req, res) {
    res.sendFile(path.join(___dirname + '/aboutus.html'));
 });
 app.get('/products', function (req, res) {
    res.sendFile(path.join(___dirname + '/products.html'));
 });

var server=app.listen(8081);
console.log("Server is running on port 8081");

