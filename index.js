var katzDeli = [];


function takeANumber(katzDeliLine, name) {
  var lineLength = katzDeliLine.length + 1;
  var greeting = "Welcome, " + `${name}` + ". You are number " + lineLength  + " in line.";
  katzDeliLine.push(name);
  return greeting;
}


function nowServing(katzDeliLine) {
  var lineLength = katzDeliLine.length;
  var zeroGreeting = "There is nobody waiting to be served!";
  var nextGreeting = "Currently serving " + katzDeliLine[0] + ".";
  while(lineLength>0) {
    katzDeliLine.shift(1);
    return nextGreeting;
  }
  while(lineLength===0) {
    return zeroGreeting;
  }
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length;
  var currentLine = [];
  var emptyLine = "The line is currently empty.";
  var x = 1;

  for (let i=0; i<lineLength; i++) {
    currentLine.push(" " + `${x}` + ". " + katzDeliLine[`${i}`]);
    x++;
  }
  
  var theresALine = "The line is currently:" + [currentLine];
  while(lineLength>0) {
    return theresALine;
  }
  
  while(lineLength===0) {
    return emptyLine;
  }
}