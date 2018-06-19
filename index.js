var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var i = 0;
if (i < katzDeliLine.length) { 
  var name = katzDeliLine.shift()
  return `Currently serving ${name}.`
} else if (i == katzDeliLine.length) {
  return `There is nobody waiting to be served!`
  }
}

var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
   var numberAndName = [];
   for (var i=0; i<katzDeliLine.length; i++) {
   numberAndName.push(i+1 + ". " + katzDeliLine[i])
}
  return "The line is currently: " + numberAndName.join(", ");
}





