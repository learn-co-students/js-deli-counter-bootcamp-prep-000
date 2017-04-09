var katzDeliLine = [];

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return (`Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  return (`${katzDeliLine.length > 0 ? `Currently serving ${katzDeliLine.shift()}.` : `There is nobody waiting to be served!`}`)
  /*if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  } else {
    return ("There is nobody waiting to be served!")
  }*/
}

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${line.join(", ")}`;
  }
}
