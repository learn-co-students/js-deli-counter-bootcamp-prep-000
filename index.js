function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name)

  var msg = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return msg
}

function nowServing(katzDeliLine) {
  var msg = 'There is nobody waiting to be served!'

  if(katzDeliLine.length > 0) {
    msg = `Currently serving ${katzDeliLine.shift()}.`

  }
  return msg
}

function currentLine(katzDeliLine) {
  var msg = 'The line is currently empty.'
  if(katzDeliLine.length > 0) {
    msg = 'The line is currently: '
    for(let i = 0;i < katzDeliLine.length;i++) {
      msg += `${i+1}. ${katzDeliLine[i]}`
      if((i+1)< katzDeliLine.length) {
        msg += ', '
      }
    }
  }
  return msg
}
