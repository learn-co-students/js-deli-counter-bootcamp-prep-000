var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  for (var i = 0; i <= katzDeliLine.length; i++) {
    if (katzDeliLine[i] == name) {
      return `Welcome ${name}, you are number ${i + 1} in line.`
    } else if (i == katzDeliLine.length) {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  var i = 0;
  var listOfNames = [];
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  while (i < katzDeliLine.length) {
    listOfNames.push(` ${i + 1}. ${katzDeliLine[i]}`)
    i++
  }
  return `The line is currently:${listOfNames}`
}
