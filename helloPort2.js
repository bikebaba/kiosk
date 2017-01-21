var buffer = new Buffer(10);
buffer[0] = 0x05;
buffer[1] = 0xAA;
buffer[2] = 0x55;
buffer[3] = 0xFA;
buffer[4] = 0x00;
buffer[5] = 0x56;
buffer[6] = 0x00;
buffer[7] = 0x03;
buffer[8] = 0x9E;
buffer[9] = 0x00;

var serialport = require("serialport");
var SerialPort = require("serialport");

var com = new SerialPort("COM16", {
    baudRate: 38400,
    databits: 8,
    parity: 'none'
}, false);

com.open(function (error) {
            if (error) {
                console.log('Error while opening the port ' + error);
            } else {
                console.log('CST port open');
     com.write(buffer, function (err, result) {
                if (err) {
                    console.log('Error while sending message : ' + err);
                }
                if (result) {
                    console.log('Response received after sending message : ' + result);
                }
            });
       }
    });