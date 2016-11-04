
function takeANumber(katzDeliLine, name) {
var otherDeli;
var katzDeli = [];
var i = 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(deliLine) {
  var i = 0;
  var deliLine;
  if(deliLine.length > 0) {
    return "Currently serving " + deliLine.shift() + "."}
  else{return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine) {if(katzDeliLine.length > 0) {
  return ("The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2])}
else {
  return "The line is currently empty."}
}
