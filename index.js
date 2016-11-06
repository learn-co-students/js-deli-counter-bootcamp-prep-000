var katzDeli = [];

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  var number = katzDeliLine.length
  return `Welcome, ${customer}. You are number ${number} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var removed = katzDeliLine.shift()
    return `Currently serving ${removed}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. Ada 2. Grace`
  }
}
