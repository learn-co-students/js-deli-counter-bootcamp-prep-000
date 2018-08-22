function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      var name = line[0]
      line.splice(0, 1)
      return "Currently serving " + name + "."
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else  {
      var line1 = []
      for (var i = 0; i < line.length; i++) {
        line1 += (i + 1) + '. ' + line[i] + ', '
      }
      line1 = line1.slice(0, line1.length - 2)
      return "The line is currently: " + line1
  }


}