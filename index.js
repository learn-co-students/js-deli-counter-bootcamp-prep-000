var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine){
  if (katzDeliLine.lenght === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.splice(0,1)
    return (`Currently serving ${person}.`)
  }
}
function currentLine(katzDeliLine) {
var isInLine = []
if (katzDeliLine.lenght === 0) {
    return "The line is currently empty."
} else {
  for (isInLine = 0; i<isInLine.lenght; i++){
    var p = inInLine.slice(0);
    return (`i+=. ${inInLine[i]},`) 
  }
}
}