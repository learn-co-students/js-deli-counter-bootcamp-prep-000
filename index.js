var katzDeliLine = []

function takeANumber(katzDeliLine,person) {
  katzDeliLine.push(person);
  console.log(`Welcome, ${person}. You are number ${katzDeliLine.length} in line.`)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}


function nowServing (deliLine){
  if (deliLine.length > 0) {
  return `Currently serving ${deliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
var Status = [];
function currentLine(deliLine) {
if (deliLine.length > 0) {
  for (var i = 0; i < deliLine.length; i++) {
  Status.push(` ${i+1}. ${deliLine[i+0]}` );
}
return "The line is currently:" + Status
}

else {
  return "The line is currently empty."
}
}
