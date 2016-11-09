var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    if (katzDeliLine.lenghth==0) {
    katzDeliLine.push(`${name}`)
    return(`Welcome, ${name}. You are number ${name.indexOf(name)+1} in line.`);
    } else {
      katzDeliLine.push(`${name}`)
      return(`Welcome, ${name}. You are number ${katzDeliLine.indexOf(`${name}`)+1} in line.`)
    }
  }

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (katzDeliLine, name) {
  if (katzDeliLine.length == 3) {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  } else if (katzDeliLine.length == 2) {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}`
  } else if (katzDeliLine.length == 1) {
    return `The line is currently: 1. ${katzDeliLine[0]}`
  }
  else {
    return "The line is currently empty."
  }
}
