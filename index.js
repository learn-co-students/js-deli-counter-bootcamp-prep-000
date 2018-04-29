
var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
    var n = katzDeliLine.length + 1;
    katzDeliLine.push(name)
    return "Welcome, " + name + ". You are number " + n + " in line."
      }
      
function nowServing(katzDeliLine){
  var i = 0

  if (katzDeliLine.length > 0) {
  return "Currently serving " + katzDeliLine.shift(katzDeliLine[0]) + ".";
} else if (katzDeliLine.length === 0 ) {
  return "There is nobody waiting to be served!" 
} 
 
}

function currentLine(katzDeliLine){
 var i = 0;
 if (i < katzDeliLine.length) {
  return "The line is currently: 1. " + katzDeliLine[i] + ", 2. " + katzDeliLine[i + 1] + ", 3. " + katzDeliLine[i + 2]
} else if (katzDeliLine.length === 0) {
  return "The line is currently empty."
}

}