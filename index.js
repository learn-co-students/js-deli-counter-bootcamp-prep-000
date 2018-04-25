function takeANumber(katzDeliLine, newGuy) {
  katzDeliLine.push(newGuy)
  return ('Welcome, '+newGuy+'. You are number '+katzDeliLine.length + ' in line.')
}
function nowServing(nextPer) {
  if (nextPer.length === 0) {
    return ('There is nobody waiting to be served!')
  }else{
    return ('Currently serving ' + nextPer.shift() + '.')
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return ('The line is currently empty.')
  }else{
    var lineArr = [];
    for (var i=0; i <line.length; i++){
      lineArr.push(i + 1 + '. ' + line[i])
    }
    return ('The line is currently: ' + lineArr.join(', '))
  }
}