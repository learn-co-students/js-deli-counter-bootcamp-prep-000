function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var first;

  if (katzDeliLine.length) {
    first = katzDeliLine.shift();
    return `Currently serving ${first}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine) {
  var length;
  var msg = '';

  length = katzDeliLine.length;
  if (!length) {
    return "The line is currently empty.";
  } else {
    for (let x = 0; x < length; x++) {
      msg += `${x + 1}. ${katzDeliLine[x]}`;
      if (x < (length - 1))
        msg += ', ';
    }
    msg = 'The line is currently: ' + msg;
    return msg;
  }
}
