const { response } = require('express');
const express = require('express');
const router = express.Router();

router.post("/control", function (req, res){
    data = req.body;
    console.log(data);
    res.status(200);
    res.send(data);
    //Use data to set variables TODO: Function to handle variables control
});

module.exports = router;