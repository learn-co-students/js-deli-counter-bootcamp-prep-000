function takeANumber(katzDeli, name) {
  var katzDeli;

  katzDeli.push(name)

  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."

}

// unconscious work + goaling persistance = result

function nowServing(deliLine) {

  if (deliLine.length > 0) {
    var toReturn = "Currently serving " + deliLine[0] + "."
    deliLine.shift()
    return toReturn
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2]
  }
  else {
    return "The line is currently empty."
  }
}
