function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0)
    return `Currently serving ${line.shift()}.`
  else
    return 'There is nobody waiting to be served!'
}

function currentLine(line) {
  let s = line.length > 0 ? 'The line is currently: ' : 'The line is currently empty.'
  let lines = []
  for (let i = 0; i < line.length; i++) {
    lines.push(`${i + 1}. ${line[i]}`)
  }
  return s + lines.join(', ')
}