const port=8000;
const express=require('express');

const app=express();

app.get('/',function(req,res){

    // res.send("hello");
    const ipAddress = req.socket.remoteAddress;
    res.send(ipAddress);

})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server is up at: ",port);
})