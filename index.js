var katzDeliLine = []

const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

const nowServing = (katzDeliLine) => {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine.shift()
    return `Currently serving ${person}.`
  }
}

const currentLine = (katzDeliLine) => {
  var line = []
  var counter = 0
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    while (counter < katzDeliLine.length) {
      line.push(`${counter+1}. ${katzDeliLine[counter]}`)
      counter += 1
    }
  }
  return `The line is currently: ${line.join(', ')}`
}
