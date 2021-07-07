var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  let i
  if (katzDeliLine[0]) {
    var str = `The line is currently:`
    for(i = 0; i < katzDeliLine.length; i++) {
      str = str + ' ' + (i+1) + ". " + katzDeliLine[i]
      if (i !== katzDeliLine.length-1) {
        str = str + `,`
      }
    }
    return str
  } else {
    return `The line is currently empty.`
  }
}