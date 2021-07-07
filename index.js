
function takeANumber(katzDeliLine, name) {
katzDeliLine.push(`${name}`)

var string = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

return string
}

function nowServing(deliLine) {
  var i = 0
if (deliLine.length === i) {
var string = 'There is nobody waiting to be served!'
  return string
}
else {
  var str2 = 'Currently serving ' + deliLine.shift() + '.'

  return str2
}
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  var string = 'The line is currently empty.'
  return string
}
else {
  for (var i = 0; i < katzDeliLine.length; i++) {
  var str2 = 'The line is currently:' + ' 1. ' +  katzDeliLine[0] + ',' + ' 2. '
  + katzDeliLine[1] + ',' + ' 3. ' + katzDeliLine[2] 
}
return str2
}
}
