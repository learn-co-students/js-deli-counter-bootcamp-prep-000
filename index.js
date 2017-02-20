var katzDeli = []

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  let serving = katzDeliLine.shift()
  return `Currently serving ${serving}.`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  let line = 'The line is currently: '
  katzDeliLine.forEach((person, index) => {
    line += `${index + 1}. ${person}, `
  })
  return line.slice(0, line.length - 2)
}
