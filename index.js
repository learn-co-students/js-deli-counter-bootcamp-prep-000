function takeANumber(line,name) {
  var position = line.length + 1
  line.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var current_line = `The line is currently: 1. ${line[0]}`
    for (var i = 1; i < line.length; i++) {
      current_line = current_line + `, ${i + 1}. ${line[i]}`
    }
    return current_line
  }
}