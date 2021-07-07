function takeANumber(katzDeliLine, name) {
  var placeInLine = katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine) {
  var person = katzDeliLine.shift()
  return person ? `Currently serving ${person}.` : 'There is nobody waiting to be served!'
}

function currentLine(katzDeliLine) {
  if(!katzDeliLine.length)
    return "The line is currently empty."
  else {
    var message = 'The line is currently: '
    for (var i = 0; i < katzDeliLine.length; i++) {
      message += `${i+1}. ${katzDeliLine[i]}`
      message += `${i=== katzDeliLine.length-1? '' : ', '}`
    }
    return message
  }

}
