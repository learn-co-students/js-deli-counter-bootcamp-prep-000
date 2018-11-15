function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var numLine = katzDeliLine.indexOf(name)
  var welcomeMessage = `Welcome, ${name}. You are number ${numLine + 1} in line.`
  return welcomeMessage

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length != 0) {
    var firstPerson = katzDeliLine.slice(0,1)
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
//
takeANumber(3,"john")

function currentLine(currentPosition) {
  if (currentPosition.length > 0) {
    return `The line is currently: 1. ${currentPosition[0]}, 2. ${currentPosition[1]}, 3. ${currentPosition[2]}`
  } else {
    return 'The line is currently empty.'
  }
}
