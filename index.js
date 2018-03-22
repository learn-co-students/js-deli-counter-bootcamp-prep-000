var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing (katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(line) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var listLine = []
    for (let i=0; i<katzDeliLine.length; i++) {
      listLine.push(" "+parseInt(i+1)+ "." +katzDeliLine[i])
    }
    return `The line is currently: ${listLine}`
  }
}