

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var lineoutput = ""
  var pretext = "The line is currently: "
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      lineoutput = lineoutput.concat(i+1 + ". " + katzDeliLine[i] + ", ")
    }
    lineoutput = lineoutput.slice(0, -2)
    return pretext.concat(lineoutput)
  }
  else {
    return "The line is currently empty."
  }
}
