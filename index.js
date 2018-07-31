var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var customer = katzDeliLine.shift()
    return `Currently serving ${customer}.`
  }
}

function currentLine(katzDeliLine) {
  var l = katzDeliLine.length
  if (l === 0) {
    return "The line is currently empty."
  } else {
    var announcement = "The line is currently:"
    for (let i = 0; i < l; i++) {
      if (i === l-1) {
        announcement += ` ${i + 1}. ${katzDeliLine[i]}`
      } else {
        announcement += ` ${i + 1}. ${katzDeliLine[i]},`
      }
    }
    return announcement
  }
}