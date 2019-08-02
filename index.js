function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return  'Welcome, ' + newCustomer + '. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return 'Currently serving ' + katzDeliLine.shift() + '.'
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  var line = []
  for (var i = 0; line.length < katzDeliLine.length; i++) {
    line.push(' ' + (i+1) + '. ' + katzDeliLine[i])
  }
  if (katzDeliLine.length > 0) {
    return 'The line is currently:' + line
  }
  else {
   return 'The line is currently empty.'
  }
}
