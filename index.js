var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function  nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return `There is nobody waiting to be served!`
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return `The line is currently empty.`
  }
  var position = []
  for (let i = 0; i < line.length; i++) {
    position.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${position.join(', ')}`
}
