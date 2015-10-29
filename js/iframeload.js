function loadXMLDoc()
{
  T("#tommyAction").hide();

  var str = "Hello there ! I hear you like BLUE... Or maybe RED... or YELLOW.           BUT I KNOW WHAT YOU REALLY LIKE!"


  writeString(str);
  setBackground("blue", "white", 3100);
  setBackground("red", "white", 4800);
  setBackground("yellow", "black", 5900);
  buttons("#animated-party", 12000);
  buttons("#animated-snow", 13000);
  buttons("#animated-candle", 14000);
  buttons("#animated-iframe", 15000);

}
