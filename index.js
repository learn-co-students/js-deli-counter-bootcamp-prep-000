var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  if (katzDeliLine.length > 0) {
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  }
}

function nowServing(katzDeliLine) {
    if (katzDeliLine[0] === undefined) {
      return 'There is nobody waiting to be served!';
    } else {
    var currentCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    var line = []
    for (let i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
  } return `The line is currently:${line}`;
}
