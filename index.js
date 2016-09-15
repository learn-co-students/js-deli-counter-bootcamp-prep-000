var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return("Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.")
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return("The line is currently empty.")
  } else {
    var message = "The line is currently: ";
    for(var i = 0; i < katzDeliLine.length - 1; i++) {
      message = message + (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    message = message + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1];
    return message
  }
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return("There is nobody waiting to be served!")
  } else {
    return("Currently serving " + katzDeliLine.shift() + ".")
  }
}
