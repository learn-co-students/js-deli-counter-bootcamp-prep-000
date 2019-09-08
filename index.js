function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var position = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${position} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var first = line[0]
    line.shift()
    return `Currently serving ${first}.`
  }
}

function currentLine(line) {
    if (line.length === 0) {
    return 'The line is currently empty.'
    } else {
      var msg = 'The line is currently:'
      for (let i = 0; i < line.length; i++) {
        msg = msg + ` ${i + 1}. ${line[i]}`
        if (i === line.length - 1) {
          msg = msg
        } else {
          msg = msg + ','
        }
      }
      return msg
    }
} 