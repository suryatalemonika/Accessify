const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("welcome user welcome to the world of servers");
})

app.post('/signin',(req,res)=>{
    console.log(req.params);
    res.send("you are sign In");
})

app.post('/signup',(req,res)=>{
    res.send("you are sing out");
})

app.listen(port,()=>{
    console.log(`${new Date().toJSON()}Server is running on port ${port}`);
})