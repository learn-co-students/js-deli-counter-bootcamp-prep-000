var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var n = katzDeliLine.length
  return `Welcome, ${newName}. You are number ${n} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var arrLine = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      arrLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return 'The line is currently:' + arrLine
  }
}