function takeANumber(katzDeli, element) {
    katzDeli.push(element);
  return (`Welcome, ${element}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`)
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  }
  else {
    return "The line is currently empty."
  }
}
