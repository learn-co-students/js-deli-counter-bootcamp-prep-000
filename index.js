var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

while (katzDeliLine.length > 0)
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){

  while (katzDeliLine.length < 1) {
    return 'There is nobody waiting to be served!'
  }

  while (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }

}

function currentLine(line) {
  var lineList = []

  while (line.length < 1) {
    return 'The line is currently empty.'
  }

  for (var i =1; line.length > 0; i++) {
    lineList.push(` ${i}. ${line.shift()}`)

  }
  return `The line is currently:${lineList}`
}
