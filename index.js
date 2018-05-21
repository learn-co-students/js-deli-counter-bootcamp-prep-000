function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + deliLine.shift() + "."
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var newstring = "The line is currently: "
    for (let i = 0; i < deliLine.length-1; i++) {
      newstring = newstring + (i+1) +". "+deliLine[i]+", "
    }
    newstring = newstring + deliLine.length+". "+deliLine[deliLine.length-1]
  }
  return newstring
}