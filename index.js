var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var counter = 0
    var currentLine = []
    while (counter < katzDeliLine.length) {
      currentLine.push(` ${counter + 1}. ${katzDeliLine[counter]}`)
      counter ++
    }
  return `The line is currently:${currentLine}`
  }
}
