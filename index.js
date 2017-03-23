var katzDeliLine = [];
function takeANumber(katzDeliLine,name) {
  return "Welcome, " + name + ". You are number " +katzDeliLine.push(name)+ " in line."
}

function nowServing(line) {
  if (line.length >= 1) {
    var name = line.shift()
    return "Currently serving " + name + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
var newLine = []
for (var i=0; i < line.length; i++) {
  newLine.push(" " + (i+1) + ". " + line[i])
} if (line.length===0) {
  return "The line is currently empty."
} else {
  return "The line is currently:" + newLine
 }
}