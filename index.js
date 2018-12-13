function takeANumber(katzDeliLine, person) {
  if (!Array.isArray(person)) {
    katzDeliLine.push(person)
    return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
  }
  else {
    katzDeliLine = [...katzDeliLine, person]
    return katzDeliLine
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var nameServed = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${nameServed}.`
  }
}

function currentLine(katzDeliLine) {
  var returnStr = "The line is currently"

  if (katzDeliLine.length == 0) {
    return `${returnStr} empty.`
  }
  else {
    returnStr += ":"
    for (var i = 0; i < katzDeliLine.length; i++) {
      returnStr += ` ${i + 1}. ${katzDeliLine[i]},`
    }
    return returnStr.substring(0, returnStr.length - 1)
  }
}
