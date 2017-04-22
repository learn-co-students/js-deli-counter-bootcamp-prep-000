

function takeANumber (katzDeliLine, customer) {
  katzDeliLine.push(customer);
  return (`Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } 
  else {
    var customer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
  var list = [];
  for (let i=0; i < katzDeliLine.length; i++) {
    list.push(`${i+1}. ${katzDeliLine[i]}`)
  }
      return `The line is currently: ${list.join(", ")}`
  }
}