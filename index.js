var katzDeliLine = [];
function takeANumber(katzDeliLine,custName){
  katzDeliLine.push(custName) 
var totalInLine = katzDeliLine.length
var arrayPosition = katzDeliLine.length - 1
var katzGreet = 'Welcome, '+ katzDeliLine[arrayPosition] + '. You are number ' + totalInLine.toString() +' in line.'
  return katzGreet
}

function nowServing(katzDeliLine){
if (katzDeliLine.length > 0){
var beingServed = "Currently serving " + katzDeliLine.shift() + "."
}
else {
  var beingServed = "There is nobody waiting to be served!"
}
  return beingServed 
}

function currentLine(katzDeliLine){
var n = katzDeliLine.length
  if (n > 0){
    var lineStatus= ["The line is currently: "]
for (var i = 1; i < n; i++) {
  lineStatus.push(i.toString());
      lineStatus.push(". "); 
      lineStatus.push(katzDeliLine[i-1])
      lineStatus.push(", "); 
    } 
    lineStatus.push(n.toString());
        lineStatus.push(". "); 
        lineStatus.push(katzDeliLine[n-1])
var lineStatus = lineStatus.join("")
}
  else {
    var lineStatus = "The line is currently empty."
  }
    return lineStatus 
  }
