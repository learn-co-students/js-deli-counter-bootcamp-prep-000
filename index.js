var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var customer = katzDeliLine.shift()
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${customer}.`
  }
}

function currentLine(katzDeliLine) {
  var string = 'The line is currently:'
  var line = []
  var i = 0
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    for(i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${[i + 1]}. ${katzDeliLine[i]}`)
    }
    return `${string}${line}`
  }
}
