
function takeANumber(katzDeliLine, name) {
var n = 1; n < katzDeliLine.length; n++;
var number = katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > null) {
  return `Currently serving ${katzDeliLine.shift()}.`;
} else {
 return "There is nobody waiting to be served!";
}}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > null) {return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`}
  else {return "The line is currently empty."}
}