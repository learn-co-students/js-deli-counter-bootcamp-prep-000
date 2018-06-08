var katzDeliLine = []
var counter = 0

const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

const nowServing = (katzDeliLine) => {
  var person = katzDeliLine.shift()

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${person}.`
  }
}

const currentLine = (katzDeliLine) => {
  var line = []
  var counter = 0
  var finalLine = []
  
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    while (counter < katzDeliLine.length) {
      line.push(`${counter+1}. ${katzDeliLine[counter]}`)
      finalLine = line.join(', ')
      counter += 1
    }
  }
  return `The line is currently: ${finalLine}`
}
