function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var message = ""
  if (line.length === 0) {
    message = message + "The line is currently empty."
  } else {
    message = message + "The line is currently:"
    for (var i = 0; i < line.length - 1; i++) {
      message = message + ` ${i+1}. ${line[i]},`
    }
    message = message + ` ${line.length}. ${line[line.length-1]}`
  }
  return message
}