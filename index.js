function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0 ) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (line.length === 0 ) {
    return "The line is currently empty."
  }
  var str = "The line is currently:"
  var i = 0
  while (i < line.length) {
    str += ` ${i+1}. ${line[i++]}`
    if (i < line.length) {
      str += ","
    }
  }
  return str
}
