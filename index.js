function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine.shift()
  if (name == undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    return 'Currently serving ' + name + '.'
  }
}

function currentLine(katzDeliLine) {
  var message = 'The line is currently: '
  if (katzDeliLine.length == 0) {
    return 'The line is currently empty.'
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i + 1 == katzDeliLine.length) {
        message = message + (i + 1) + '. ' + katzDeliLine[i]
      } else {
        message = message + (i + 1) + '. ' + katzDeliLine[i] + ', '
      }

    }
    return message
  }
}
