function takeANumber(katzDeliLine, customerName) {
  var nextLinePlace = katzDeliLine.length + 1;
  katzDeliLine[nextLinePlace - 1] = customerName
  var outputString = "Welcome, " + customerName + ". You are number " + nextLinePlace + " in line.";
  return outputString
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var outputString =  "Currently serving " + katzDeliLine.slice(0,1) + ".";
    katzDeliLine.shift();
    return outputString
  } else if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var outputString = "The line is currently:";
    for (let i=0; i < katzDeliLine.length; i++){
      outputString += " " + parseInt(i+1) + ". " + katzDeliLine[i] + ",";
    }
  outputString = outputString.slice(0, outputString.length - 1);
  } else if (katzDeliLine.length === 0) {
    var outputString = "The line is currently empty.";
  }
  return outputString
}
