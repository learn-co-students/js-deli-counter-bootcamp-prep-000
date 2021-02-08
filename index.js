// var katzDeliLine = [];

function takeANumber(currentLine, newPersonsName) {
  var intLine = currentLine + 1;
  return "Welcome, "  + newPersonsName + ". You are number " + intLine + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else { 
    katzDeliLine.shift()
  }
}