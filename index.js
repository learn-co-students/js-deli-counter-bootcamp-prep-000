var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var string = `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
  return string;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    var string = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return string;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
    var customers = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      customers.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    return  `The line is currently: ${customers.join(', ')}`
  }
}
