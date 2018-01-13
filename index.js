function takeANumber (katzDeliLine, name) {
  var inLine = katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${inLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextCustomer = katzDeliLine.shift()
    return `Currently serving ${nextCustomer}.`
  }
  return 'There is nobody waiting to be served!'
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = "The line is currently:"
    for (var i = 1; i <= katzDeliLine.length; i++) {
      if (i === katzDeliLine.length) {
        line += ` ${i}. ${katzDeliLine[i-1]}`
      } else {
        line += ` ${i}. ${katzDeliLine[i-1]},`
      }
    }
    return line
  }
  return 'The line is currently empty.'
}
