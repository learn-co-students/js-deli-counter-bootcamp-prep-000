function takeANumber(existingLine, newPatron) {
  existingLine.push(newPatron)
  var realPlace = existingLine.length
  return "Welcome, " + newPatron + ". You are number " + realPlace + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."
    } else {
      return "There is nobody waiting to be served!"
    }
}

function currentLine (katzDeliLine) {
  var i = 0
  var lineString = ""
  if (katzDeliLine.length > 0) {
  for (i = 0; i < katzDeliLine.length; i++) {
      var linePlace = String(i + 1)
    lineString += linePlace + ". " + katzDeliLine[i] + ", "
  }
  var actual = lineString.slice(0, lineString.length - 2)
return "The line is currently: " + actual
      } else {
        return "The line is currently empty."
      }
}
