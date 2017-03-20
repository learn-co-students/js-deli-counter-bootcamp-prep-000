var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push (name)
  let pos = katzDeliLine.length
  return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(line) {
  if (line[0] === undefined) {
    return "There is nobody waiting to be served!"
  }
  else {
  let served = line.shift()
  return `Currently serving ${served}.`
  }
}

function currentLine(line) {
  if (line[0] === undefined) {
    return "The line is currently empty."
  }

  else {
    let output = `The line is currently: `
    for (var i = 0; i < line.length; i++) {
      let concat = []
      concat.push (i + 1)
        if (line[i+1] === undefined) {
          concat.push (line[i])
        }
        else {
          concat.push (line[i] + ', ')
        }
      output += concat.join('. ')
    }
  return output
}
}
