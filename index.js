function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(DeliLine) {
  var x = DeliLine.length
  const c = DeliLine[0]
  DeliLine.shift()
  if(x > 0) {
    return `Currently serving ${c}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(line) {
  if (line == 0) {
    return 'The line is currently empty.'
  }
  else {
    var array = []
    for (var i = 0; i < line.length; i++) {
      array.push(` ${i + 1}. ${line[i]}`)
    }
    return 'The line is currently:' + array
  }
}
