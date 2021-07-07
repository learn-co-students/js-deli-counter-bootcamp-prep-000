var katzDeli = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  var lineLength = katzDeliLine.length;
  return `Welcome, ${customerName}. You are number ${lineLength} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var queue = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
    queue.push(`${i + 1}. ${katzDeliLine[i]}`);
    var currentQueue = queue.join(', ');
    }
    return `The line is currently: ${currentQueue}`;
  } else {
    return "The line is currently empty."
  }
}
