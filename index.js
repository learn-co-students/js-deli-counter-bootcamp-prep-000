var katzDeli = []

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  katzDeli = katzDeliLine
  var message = `Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`
  return message
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    nowServing = katzDeliLine.shift()
    katzDeli = katzDeliLine
    return `Currently serving ${nowServing}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var customerNumber = 1
    var customers = ""
    while(katzDeliLine.length > 0) {
      var customerName = katzDeliLine.shift()
      customers += `${customerNumber}. ${customerName}`
      customerNumber++
      if (katzDeliLine.length > 0) {
        customers += ", "
      }
    }
    return `The line is currently: ${customers}`
  }
}
