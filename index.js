var katzDeli =[]

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var result = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return result
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently:"
  var i = 0
  if (katzDeliLine.length === 0) {
    line = "The line is currently empty."
  } else {
    while (i < katzDeliLine.length - 1 || i === 0) {
      line += ` ${i + 1}. ${katzDeliLine[i]},`
      i++
    }
  line += ` ${i + 1}. ${katzDeliLine[i]}`
  }
  return line
}
