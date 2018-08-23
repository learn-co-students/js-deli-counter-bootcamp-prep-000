  var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
var i 
i=katzDeliLine.length
katzDeliLine.push(`${name}`)

return ('Welcome, '+(name)+'. You are number '+(i+1)+' in line.')
}

function nowServing(katzDeliLine) {
  var i
  i=katzDeliLine.length
  if (i>0) { 
    var served = katzDeliLine[0]
    katzDeliLine.shift() 
    return 'Currently serving '+served+'.'
  } else { return "There is nobody waiting to be served!" } 
}

function currentLine(line) {
  var current = ["The line is currently:"]
  for (var i = 0; i < line.length; i++) {
    current.push(` ${i+1}. ${line[i]},`)
  }
    if (i>0) {
     return current.join("").slice(0,-1)
  } else {
    return "The line is currently empty."
  }
}