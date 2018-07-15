var katzDeliLine = ["Bill", "Jane", "Anne"];

function takeANumber(katzDeliLine, name) {

katzDeliLine.push(name);

var number = katzDeliLine.length;

return "Welcome, " + name + ". You are number " + number + " in line.";
}


function nowServing(katzDeliLine) {

if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
}
return "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine(katzDeliLine) {
var newArray = [];

for (let i = 0; i < katzDeliLine.length; i++){
  newArray.push(" " + (i + 1) + ". " + katzDeliLine[i]);
}
if (katzDeliLine.length === 0) {
  return "The line is currently empty.";
}
return "The line is currently:" + newArray;
}