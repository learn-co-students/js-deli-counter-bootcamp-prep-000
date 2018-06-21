function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return 'There is nobody waiting to be served!'
  } else {
      var currentCustomer = katzDeliLine[0]
      katzDeliLine.shift()
      return `Currently serving ${currentCustomer}.`
  }
}

function currentLine(katzDeliLine) {
  var theLine = 'The line is currently: '
  
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (var i = 0; katzDeliLine.length > 0; i++) {
      theLine = `${katzDeliLine.length}. ${katzDeliLine[i]}, `
    }
  return theLine
  }
}