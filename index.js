function takeANumber(line, name) {
  line.push(name)
  var place = line.length
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var i = line.shift(1)
    return `Currently serving ${i}.`
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const numbersAndNames = []
  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i+1}. ${line[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
}
