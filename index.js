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


//This function should return the next person in line and then remove them from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

function nowServing(katzDeliLine) {
  //If there is nobody in line, it should return "There is nobody waiting to be served!"
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  ////This function should return the next person in line and then remove them from the line.
  } else if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}


//3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada 2. Grace"`(array).  If there is nobody in line, it should return `"The line is currently empty."`

function currentLine (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else if (katzDeliLine.length >= 0) {
    return `The line is currently ${katzDeliLine[i][i]}`
  }
}

function currentLine(katzDeliLine) {
  var i = 0;
  var waitingLine = [];
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  while (i < katzDeliLine.length) {
    waitingLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
    i++
  }
  return `The line is currently:${waitingLine}`
}
