var katzDeliLine = [];
var otherDeli = [];
function takeANumber(katzDeliLine, personName) {

  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine(katzDeliLine){
  var newLine = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for(var i = 1; i <= katzDeliLine.length; i++) {
    newLine.push(i+". "+katzDeliLine[i-1])
  }
  return "The line is currently: " + newLine.join(", ");
}
