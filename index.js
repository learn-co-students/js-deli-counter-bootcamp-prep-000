var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.splice(0,1)
    return (`Currently serving ${person}.`)
  }
}
function currentLine(katzDeliLine) {
if (katzDeliLine.length === 0) {
    return "The line is currently empty."
} else {
  var isInLine = []
  for (i = 0; i<isInLine.length; i++){
    return (`${i+1}. ${isInLine[i]},`) 
  }
}
}