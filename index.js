function takeANumber(current, name) {
  current.push(name)
  var i = current.length - 1
  if (i === 0) {i++}
  else if (i > 1) {i++}
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
}
  var numbersAndNames = []
  for (let i = 0, l = line.length; i < l; i++) {
  numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
}
