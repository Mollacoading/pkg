const express= require('express');
const app = express();
const userRouter = require('./router/user.router');

app.use(userRouter);


app.use('/Home', (req, res)=>{
    res.status(200).json({
        name: "oshim",
        statusCode: "200"
    });
});

app.use((req, res)=>{
    res.send("<h1>404 !!! Not a Valid Url</h1>")
});

module.exports = app;