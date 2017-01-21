var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("COM15", {
  baudrate: 9600,
  parser: serialport.parsers.Readline()
});

function write() //for writing
{
    sp.on('data', function (data)
    {
        sp.write("Write your data here");
    });
}

function read () // for reading
{
    sp.on('data', function(data)
    {
        console.log(data);
    });
}

sp.on('open', function()
{
    // execute your functions
    write();
    read();
});