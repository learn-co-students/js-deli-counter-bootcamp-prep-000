function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var length = katzDeliLine.length;
  for (var i = 0; i < length; i++) {
    if (i === (length - 1)) {
      i++;
      return `Welcome, ${name}. You are number ${i} in line.`;
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var temp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${temp}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var counter = 1;
    var tempArray = [];
    var tempString = "The line is currently: ";
    for (var j = 0; j < katzDeliLine.length; j++) {
      tempArray = katzDeliLine[j];
      if (j === katzDeliLine.length - 1) {
        tempString = tempString + `${counter}. ${tempArray}`
      }
      else {
        tempString = tempString + `${counter}. ${tempArray}, `
      }
      counter++;
    }
  }
  return tempString;
}