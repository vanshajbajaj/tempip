const port = 8000;
const express = require('express');
const axios=require('axios');
const requestIp = require('request-ip');

const app = express();

app.get('/',async function (req, res) {

    // res.send("hello");
    // const ipAddress = req.socket.remoteAddress;
    // res.send(ipAddress);
    var clientIp = requestIp.getClientIp(req)
    // var loc= await axios.get(`http://api.ipstack.com/${clientIp}?access_key=2f365ac1b83a66f804d1d57a13b278a2`);
    var loc= await axios.get(`http://api.ipstack.com/134.201.250.155?access_key=2f365ac1b83a66f804d1d57a13b278a2`);
    res.send(`Your IP Address is ${clientIp}.`+`location is: ${loc.data.city}`);
    console.log(loc.data);


})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server is up at: ", port);
})