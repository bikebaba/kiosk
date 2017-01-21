var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var portName = "COM15";


var myPort = new serialport(portName,{
   baudRate:9600,
   parser: serialport.parsers.Readline()

});

myPort.on('data', function (data) {
  console.log('Data: ' + data);
});