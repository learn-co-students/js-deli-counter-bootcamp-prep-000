var katzDeli = [];
var katzDeliLine = [];

function takeANumber(lineArray, newPersonName) {
  lineArray.push(newPersonName);
  for (var i = 0; i < lineArray.length; i++) {
    if (lineArray[i] === newPersonName) {
      return `Welcome, ${newPersonName}. You are number ${i + 1} in line.`;
    }
  }
}

function nowServing(lineArray) {
  if (lineArray.length >= 1) {
    return `Currently serving ${lineArray.shift()}.`
  }
  else if (lineArray.length === 0) {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(lineArray) {
  var counter = 0;
  var positionAndName = [];
  if (lineArray.length > 0) {
    while (counter < lineArray.length) {
      positionAndName.push(` ${counter + 1}. ${lineArray[counter]}`);
      counter += 1;
    }
    return `The line is currently:` + positionAndName;
  }
  else {
    return "The line is currently empty.";
  }
}
