
function takeANumber(katzDeliLine, name) {
var otherDeli;
var katzDeli = [];
var i = 1;
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {return "Currently serving " + katzDeliLine[0]+ "."}
  else{return "There is nobody waiting to be served!"}
  katzDeliLine = katzDeliLine.slice(1);
}

function currentLine(katzDeliLine) {if(katzDeliLine.length > 0) {
  return "The line is currently: 1. " + name +  " 2. " + name}
else {
  return "The line is currently empty."}
}
