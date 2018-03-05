var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + deliLine.shift() + ".";
  }
}

function currentLine(deliLine) {
  var currentLineCustomers = [];
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for(var i = 0; i < deliLine.length; i++) {
      currentLineCustomers.push(i + 1 + ". " + deliLine[i]);
    }
    return "The line is currently: " + currentLineCustomers.join(', ');
  }
}
