function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
   return 
  }
}

function currentLine(line) {
  var lineOrder = "The line is currently: "
  if (line.length === 0) {
    lineOrder = "The line is currently empty"
  } else {
    for (let i = 0; i < line.length; i++) {
    spot = i + 1
    if (i === 0) {
      lineOrder = lineOrder + spot + ". " + line[i]
    } else {
      lineOrder = lineOrder + ", " + spot + ". " + line[i]
    }
  }
  }
  return lineOrder
}