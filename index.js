var katzDeli = []
var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
}
else {var name = katzDeliLine.shift()
  return `Currently serving ${name}.`
}
}

function currentLine(line) {
  var array = []
if (line.length === 0) {return "The line is currently empty."}
else {var n = 0; var x = 0
  while(n < line.length) {
  x++;
  array.push(` ${x}. ${line[n]}`)
  n++;
}
return `The line is currently:${array}`
}
}
