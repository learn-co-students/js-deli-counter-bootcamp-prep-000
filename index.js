var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var response
  if (line.length > 0) {
    response = `Currently serving ${line[0]}.`
    line.shift()
  } else {
    response = "There is nobody waiting to be served!"
  }
  return response
}

function currentLine(line) {
  var response
  if (line.length > 0) {
    response = `The line is currently: 1. ${line[0]}`
    for (var i = 1; i < line.length; i++) {
      response = response + `, ${i + 1}. ${line[i]}`
    }
  } else {
    response = "The line is currently empty."
  }
  return response
}
