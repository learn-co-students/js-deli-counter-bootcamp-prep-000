function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) { // remember to use === rather than = when testing for equality
    return `There is nobody waiting to be served!`
  } else {
    var announcement = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return announcement // remember to return at the end
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
    var queue = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++) {
      queue = `${queue} ${i + 1}. ${katzDeliLine[i]}`
      if (i < katzDeliLine.length - 1) {
        queue = `${queue},`
      }// add commas after each but the last name per error message but not per readme
    }
    return queue
  }
}
