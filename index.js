var katzDeli = [];


function takeANumber(katzDeliLine,name) {
  var position = katzDeliLine.length+1;
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + position + " in line.");
}

function nowServing(katzDeliLine) {
  var person = [];
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  person = katzDeliLine.shift();
    return "Currently serving " + person + ".";
}

var line = [];
function currentLine(katzDeliLine) {
  var i = 0;
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `+katzDeliLine[i]);
    i++;
  }
  
    if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
    return("The line is currently:" + line);
}