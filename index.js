var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, "+ name +". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var whosUp = katzDeliLine.shift();
    return "Currently serving " + whosUp + ".";
  }
}

function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var lineString = ["The line is currently: "];
    var tempString = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === (katzDeliLine.length - 1)){
        tempString = [(i+1) +". " + katzDeliLine[i]];
        lineString = lineString + tempString;
      }
      else {
        tempString = [(i+1) +". " + katzDeliLine[i] + ", "];
        lineString = lineString + tempString;
      }
  }
  return lineString;
}
}