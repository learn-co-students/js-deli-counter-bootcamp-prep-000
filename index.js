var katzDeli = [];

function takeANumber(katzDeliLine, customerName) {
    katzDeliLine.push(customerName);
    return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  var returnString;
  if (katzDeliLine.length > 0) {
    returnString = 'The line is currently: ';
    for (var n = 0; n < katzDeliLine.length; n++) {
      if (n > 0) {
        returnString = returnString + ', ';
      }
      returnString = returnString + `${n+1}. ${katzDeliLine[n]}`;
    }
  } else {
    returnString = 'The line is currently empty.';
  }
  return returnString;
}