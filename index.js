var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(katzDeliLine) {
  var numberandName = [];
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  } else {
      for(var i = 0; i < katzDeliLine.length; i++) {
      numberandName.push([i+1] + ". "+ katzDeliLine[i]);
    }
  }
 return "The line is currently: " + numberandName.join(', ');
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  } else {
  return "Currently serving " + katzDeliLine.shift() + "." ;
  }
}
