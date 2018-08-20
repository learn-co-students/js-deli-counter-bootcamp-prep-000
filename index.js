function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}


function currentLine(names) {
  if (names.length === 0) {
    return "The line is currently empty."
  }
  const line = []

  for (let i = 0, l = names.length; i < l; i++) {
    line.push(`${i + 1}. ${names[i]}`)
  }

  return `The line is currently: ${line.join(', ')}`
}