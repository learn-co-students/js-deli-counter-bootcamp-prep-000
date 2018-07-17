var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var linePlace = katzDeliLine.length
  return `Welcome, ${name}. You are number ${linePlace} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var tempName = deliLine[0]
    deliLine.shift()
    return `Currently serving ${tempName}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var tempString = 'The line is currently: '
    for ( var i = 0; i < line.length; i++) {
      var ii = i + 1
      if (i === line.length - 1) {
        tempString += `${ii}. ` + line[i]
      } else {
        tempString += `${ii}. ` + line[i] + ', '
      }
    }
    return tempString
  }
}
