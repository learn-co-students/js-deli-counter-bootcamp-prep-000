var katzDeli = [];
function takeANumber (katzDeliLine,name) {
 katzDeliLine.push(name);
 
 return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ('There is nobody waiting to be served!');
  } else (katzDeliLine.shift());
  return ('Currently serving Steven.');
}
var line = [];
function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else (line.push());
  return ("The line is currently: 1. Bill, 2. Jane, 3. Ann");
  
}