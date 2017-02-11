var katzDeli = [];

function takeANumber (katzDeli, newPerson) {
  katzDeli.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(katzDeli) {
  var n = 0;
  while (n < katzDeli.length){
    n++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else (katzDeli > 0) 
    return ("Currently serving " + katzDeli.shift() + ".");
  }


var deliLine = [];

function currentLine(katzDeli) {
  var n = 0;
  while (n < katzDeli.length) {
    deliLine.push(' ' + [n+1] + '. ' + katzDeli[n])
    n++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  else (katzDeli.length > 0) 
    return "The line is currently:" + deliLine;
  }
