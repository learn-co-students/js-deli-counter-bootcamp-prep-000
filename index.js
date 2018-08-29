//1
var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}

//2
function nowServing(katzDeli) {
  var i = 0;
  while ( i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return (`Currently serving ${katzDeli.shift()}.`);
  }
}

//3
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2];
  }
}
