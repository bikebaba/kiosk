using System;
using System.IO.Ports;
using System.Threading;

namespace ftdi_photointerrupt
{
	class Program
	{
		static int count=0;

		static void Main(string[] args)
		{
			// initialize serial port - ours is on COM15
			SerialPort serialPort=new SerialPort(){PortName="COM15"};

			// set up a delegate for the PinChanged Interrupt
			serialPort.PinChanged += serialPort_PinChanged;
			
			serialPort.BaudRate = 1200;
			// open Serial port
			serialPort.Open();
			serialPort.ReadLine();
			//Console.WriteLine(Console.KeyAvailable);
			// run in a loop waiting quit program when keyboard pressed
			 while (!Console.KeyAvailable) 
				Console.WriteLine("\r{0}  ", count);;
		}

		// this is the CTS interrupt
		static void serialPort_PinChanged(object sender, SerialPinChangedEventArgs e)
		{
				Console.WriteLine("AAAAA");
			// please note that this will be called every time the CTS changes 
			// i.e. on transition from low to high and high to low.
			// if you are only interested in a specific transition query the 
			// port for its current CTS state.
			if (e.EventType == SerialPinChange.CtsChanged)
				count++;
				Console.WriteLine("\r{0}  ", count);
				Console.WriteLine(sender);
				Console.WriteLine(e);
		}
	}
}