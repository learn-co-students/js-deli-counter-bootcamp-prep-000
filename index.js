function takeANumber(line, name) {
  line.push(name)
  var index = line.length
  return `Welcome, ${name}. You are number ${index} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var serving = line[0]
  line.shift()
  return `Currently serving ${serving}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var x = 'The line is currently:'
  for (var i = 0; i < line.length; i++) {
    x += (` ${i + 1}. ${line[i]},`)
  }
  return x.slice(0, - 1)
}
