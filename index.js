function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var linePos = katzDeliLine.indexOf(newName) + 1;
  return `Welcome, ${newName}. You are number ${linePos} in line.`;
}


function nowServing(lineArray) {
  var upNow = lineArray.shift();
  return lineArray.length > 0 ? `Currently serving ${upNow}.` : 'There is nobody waiting to be served!';
}


function currentLine(lineArray) {
  var lineStatus = "", sentence = 'The line is currently';

  if (lineArray.length === 0) {
    lineStatus = ' empty.';
  } else {
    lineStatus += ': ';
    lineArray.forEach( (current, index) => {
    lineStatus += (index + 1) + '. ' + current;

    if (lineArray[index + 1]) {
      lineStatus += ', ';
    }
  });
  }
return sentence + lineStatus;
}
