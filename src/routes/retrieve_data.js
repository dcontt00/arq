const express = require('express');
const router = express.Router();

router.get('/read/data', function(request, response){
    //Get sensor data and send it
    data = {
        amb_temperature: 20,
        amb_humidity: 50,
        t_humidity: [60, 90, 40, 50, 20],
        brightness: 40,
    }

    response.json(data);
    response.status(200);
    response.send();
    response.end();
});

module.exports = router;