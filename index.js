var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var waitNumber = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${waitNumber} in line.`
}

function nowServing(katzDeliLine) {
  var waitNumber = katzDeliLine.length;
  //var firstInLine = katzDeliLine[0];
  if (waitNumber > 0) {
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var waitNumber = katzDeliLine.length;
  //var counter = 0
  //var positionNumber = katzDeliLine[counter + 1];
  var lineIsCurrently = "The line is currently: "
  if (waitNumber > 0) {
    //var nameAndPosition = []; // Perhaps create an object with keys and values?
    for (let i = 0; i < waitNumber; i++) {
      var positionName = katzDeliLine[i];
      var positionNumber = i + 1;
      var lastIndex = waitNumber - 1;
      lineIsCurrently = lineIsCurrently + positionNumber + `. ${positionName}`;
      if (i < lastIndex) {
        lineIsCurrently = lineIsCurrently + ", "
      }
    }
    return lineIsCurrently
  } else {
    return "The line is currently empty."
  }
}
