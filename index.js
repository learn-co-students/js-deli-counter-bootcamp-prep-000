var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  var position = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for (let i = 0, p = katzDeliLine.length; i < p; i++) {
    position.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${position.join(", ")}`
}
