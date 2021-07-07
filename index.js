
var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }

function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0)  {
      return `Currently serving ${katzDeliLine.shift()}.`
    }
  else {
  return "There is nobody waiting to be served!"
 }
}


//if people "The line is currently: 1. Ada, 2. Grace"
//if not "The line is currently empty."
function currentLine(katzDeliLine){
  var line = "The line is currently: "
//using line as a string var
  var i;
if (katzDeliLine.length > 0) {
  for (i = 0; i < katzDeliLine.length; i++) {
    if (i < katzDeliLine.length - 1)
  {
    line = line + parseInt(i + 1) + "." + " " + katzDeliLine[i] + "," + " "
  }
    else {line = line + parseInt(i + 1) + "." + " " + katzDeliLine[i]}
}
      return line
}
  else {
    return "The line is currently empty."
}
