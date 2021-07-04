var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name); 
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli, name) {
  if (katzDeli.length > 0) {
    var firstInLine = katzDeli.shift();
    return `Currently serving ${firstInLine}.`
    }
  else { 
    return "There is nobody waiting to be served!" 
    }
  }


function currentLine(katzDeli, name) {
  if (katzDeli.length === 0) {
  return "The line is currently empty."
  }
  else {
  return `The line is currently: 1. ${katzDeli[0]}, 2. ${katzDeli[1]}, 3. ${katzDeli[2]}`}
}