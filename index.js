var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return (`Currently serving ${currentCustomer}.`)
  } else {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentLineList = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      currentLineList.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return (`The line is currently: ${currentLineList.join(', ')}`)
  } else {
    return ("The line is currently empty.")
  }
}
