var katzDeli = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = "";
    for (var i = 0; i < (katzDeliLine.length - 1); i++) {
      line += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    line += (i + 1) + ". " + katzDeliLine[i];
    return `The line is currently: ${line}`;
  } else {
    return "The line is currently empty."
  }
}