function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const numbersAndNames = [];
  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i +1}. ${line[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
}
