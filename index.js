var katzDeli = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var fullLine = []
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (let i = line.length; i > 0; i--) {
    fullLine.unshift (` ${i}. ${line.pop()}`)
    }
    return `The line is currently:${fullLine}`
  }
}
