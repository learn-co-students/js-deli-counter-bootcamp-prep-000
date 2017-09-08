function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!"
  }
  var person = line.shift()
  return `Currently serving ${person}.`
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  }
  var verboseLine = "The line is currently:"
  for (var i = 0; i < line.length; i++) {
    verboseLine = verboseLine + ` ${i + 1}. ${line[i]},`
  }
  verboseLine = verboseLine.slice(0,verboseLine.length - 1)
  return verboseLine
}
