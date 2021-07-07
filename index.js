//returns position of person in line
function takeANumber(katzDeliLine, name) {
  var linePos = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${linePos} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPer = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPer}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(katzDeliLine) {
  var lineString = ""
  var number

  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {

      number = i + 1

      if (number == katzDeliLine.length) {
        lineString = lineString + number.toString() + ". " + katzDeliLine[i]
      }
      else {
        lineString = lineString + number.toString() + ". " + katzDeliLine[i] + ", "
      }
    }

    return `The line is currently: ${lineString}`
  }
  else {
    return "The line is currently empty."
  }
}
