var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    var currentCustomer = katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`
  }
}

function currentLine(katzDeliLine) {
  var line = katzDeliLine.length;
  var a = 'The line is currently: ';
  const lineCustomers = [];
  if (line < 1) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line; i++) {
      if (i === 0) {
        lineCustomers.push(`${i+1}. ${katzDeliLine[i]}`);
      } else {
        lineCustomers.push(` ${i+1}. ${katzDeliLine[i]}`);
      }
    }
     return a + lineCustomers;
  }
}
