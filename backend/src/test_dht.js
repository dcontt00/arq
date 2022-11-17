var sensorLib = require("node-dht-sensor");


/* 
sensorLib.read(a,b)
- a: Dht sensor. El 11 es el de temperatura y humedad
- b: pin en el que está conectado
*/
var sensorResult = sensorLib.read(22, 18);
console.log("Temperature: " + sensorResult.temperature.toFixed(1) + "°  / Humidity: " +  sensorResult.humidity.toFixed(1) + "%");
