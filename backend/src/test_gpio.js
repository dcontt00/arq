var Gpio = require("onoff").Gpio;
var sensor = new Gpio(4, "in", "both");

// Read temperature and humiditiy from sensor
sensor.watch(function (err, value) {
  console.log(value ? "on" : "off");
});
