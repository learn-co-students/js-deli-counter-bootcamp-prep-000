
function takeANumber (katzDeliLine, name) {
  var lineLength = katzDeliLine.length
  if (lineLength === 0) {
  katzDeliLine.push (`${name}`)
  return `Welcome, ${name}. You are number 1 in line.`;
} else {
    katzDeliLine.push (`${name}`)
    var position = katzDeliLine.length
    return `Welcome, ${name}. You are number ${position} in line.`}
  }

  function nowServing (katzDeliLine){
    var lineLength = katzDeliLine.length
    if (lineLength > 0) {
      var firstInLine = katzDeliLine[0];
      katzDeliLine.shift(0);
      return `Currently serving ${firstInLine}.`
    } else {
    return `There is nobody waiting to be served!`}
    }

function currentLine (katzDeliLine){
  var lineLength = katzDeliLine.length
  if (lineLength > 0) {
    var totalLine = []
    var lineLength = katzDeliLine.length
    var n = 0
while (n < lineLength) {
  if (n === 0) {
      totalLine.push(`${n + 1}. ${katzDeliLine[n]}`)
      n++
    } else {
      totalLine.push(` ${n + 1}. ${katzDeliLine[n]}`)
      n++
    }
    }
    return `The line is currently: ${totalLine}`
  } else {
    return `The line is currently empty.`
  }
}
