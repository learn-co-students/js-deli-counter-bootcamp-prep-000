function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return serving;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else { 
    var line = "The line is currently: 1. " + katzDeliLine[0];
    for(var i = 1; i < katzDeliLine.length; i++) {
      line += `, ${i+1}. ${katzDeliLine[i]}`
    }
    return line;
  }
}