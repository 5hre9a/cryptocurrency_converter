//jshint esversion:6

const express = require ("express");
const bodyParser = require ("body-parser");
const request = require ("request");
const { response } = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    
    //console.log(req.body.crypto);

    request("url", function(error, response, body){
    console.log(response.statusCode);
});

app.listen(3000,function(){
    console.log("server is running on port 3000");
});