function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var num = katzDeliLine.length
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine) {
var num = katzDeliLine.length
  if (num === 0) {
    return "There is nobody waiting to be served!"
  }
    else {
      var name = katzDeliLine[0]
      var num = katzDeliLine.length
      katzDeliLine.shift()
      return `Currently serving ${name}.`
    }
  }

function currentLine(currentLine) {
  var line = currentLine.length
  if (line === 0) {
    return "The line is currently empty."
  }
else {
  var arr = []
  for (var i = 0; i < currentLine.length; i+2) {

    //currentLine.splice(i, 0, `${(i+1)}.`)
  }
      return `The line is currently: ${arr}`
      //${i + 1}. ${currentLine}//

}
}
