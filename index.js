katzDeliLine = []
line = []
var x
var y
function takeANumber(katzDeliLine, name) {
  x = katzDeliLine.length
  y = x + 1
  katzDeliLine.push(name)
 return `Welcome, ${name}. You are number ${y} in line.`
}
function nowServing(line) {
  if (line.length > 0) {
    var q = line[0]
     line.shift()
    return `Currently serving ${q}.`;
} else {return "There is nobody waiting to be served!"
    }
}
function currentLine(line) {
  var d = line.length
  if (d === 0) { return "The line is currently empty."} else {
   var a = `The line is currently: ${1}. ${line[0]}`
    for(let i = 1; i < d; i++) {
      a += `, ${i+1}. ${line[i]}`
    }
    return a
  }
}