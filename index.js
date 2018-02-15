var katzDeli = []

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {return `Currently serving ${line.shift()}.`}
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  const numName = []
  for (let i = 0, l = line.length; i < l; i++) {
  numName.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${numName.join(', ')}`
}
