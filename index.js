function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var length = katzDeliLine.indexOf(name, 0) + 1
  //alternate version of above line is below
  // var length = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + length + " in line."
}

function nowServing(deliLine) {
  if (deliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + deliLine.shift() + "."
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2]
  }
}
