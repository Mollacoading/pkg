const express = require('express');
const app = require('./app');
const port = 3000;
const host = "127.0.0.1";


app.listen(port, (req, res)=>{
    console.log(`Hi I am your Server and Running at http://${host}:${port}`);
})