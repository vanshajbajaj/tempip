const port = 8000;
const express = require('express');
const requestIp = require('request-ip');

const app = express();

app.get('/', function (req, res) {

    // res.send("hello");
    // const ipAddress = req.socket.remoteAddress;
    // res.send(ipAddress);
    var clientIp = requestIp.getClientIp(req)
    res.send(`Your IP Address is ${clientIp}.`)

})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server is up at: ", port);
})