const express = require('express');
const router = express.Router();

router.get('/about', (req, res)=>{
    res.send("Hi I am Your About Route");
});

module.exports = router;