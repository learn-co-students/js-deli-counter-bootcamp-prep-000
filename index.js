var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  for (let i = 0; i < 25; i++) {
    if (!line.length) {
      return `There is nobody waiting to be served!`
    }
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const order = []

  for (let i = 0, l = line.length; i < l; i++) {
    order.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${order.join(', ')}`
}
