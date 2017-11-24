function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }
  let numsAndNames = line.map((name, i) => {
    return `${i+1}. ${name}`
  })
  return 'The line is currently: ' + numsAndNames.join(', ')
}