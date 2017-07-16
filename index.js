
var katzDeliLine = []
var newPersonName
function takeANumber (katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName)
  var newPersonLinePosition = katzDeliLine.length
  var newCustomerMessage = `Welcome, ${newPersonName}. You are number ${newPersonLinePosition} in line.`
  return newCustomerMessage
}

var firstPersonName
function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
      firstPersonName = katzDeliLine[0]
      katzDeliLine.shift()
      return `Currently serving ${firstPersonName}.`
    }
  else {return "There is nobody waiting to be served!"}
}

var line = []
function currentLine (line) {
  if (line.length > 0) {
    var currentLineMessage = []
    for (var i = 0; i < line.length; i++) {
      var customerPosition = ` ${i + 1}.`
      var customerName = `${line[i]}`
      var currentLine = `${customerPosition} ${customerName}`
      currentLineMessage.push(currentLine)
    }
    return `The line is currently:${currentLineMessage}`
  }
  else {return "The line is currently empty."}
}
