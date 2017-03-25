function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) return "There is nobody waiting to be served!"
  var firstperson = line[0]
  line.shift();
  return `Currently serving ${firstperson}.`
}

function currentLine(line) {
  const lineLength = line.length
  if (lineLength === 0) return "The line is currently empty."
  var statement = "The line is currently:"
  for (let i = 0; i < lineLength; ++i) {
    statement += ` ${i+1}. ${line[i]}`
    if (i < lineLength-1) statement += ","
  }
  return statement
}
