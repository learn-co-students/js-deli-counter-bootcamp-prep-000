const katzDeli = []

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine < 1) {

  return `There is nobody waiting to be served!`
}
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
}
}

function currentLine(line) {
var nameAndPositions = []
  if (line.length < 1) {
    return `The line is currently empty.`
  } else {
    for (let i = 0; i < line.length; i++) {
      nameAndPositions.push(`${i + 1}. ${line[i]}`)
}
  return `The line is currently: ${nameAndPositions.join(`, `)}`
}
}
