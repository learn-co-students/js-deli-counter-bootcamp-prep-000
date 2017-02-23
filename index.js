var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  var position = katzDeliLine.length
  return `Welcome, ${person}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return serving
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "
    let i = 0
    for ( i; i < katzDeliLine.length; i++ ) {
      (i == katzDeliLine.length - 1) ? (line = line + `${i+1}. ${katzDeliLine[i]}`) : (line = line + `${i+1}. ${katzDeliLine[i]}, `)
    }
    return line
  }
}
