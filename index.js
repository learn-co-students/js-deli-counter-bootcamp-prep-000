var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}
//"Welcome, Ada. You are number 1 in line."

function nowServing(line) {
  if(line.length == 0) {
    return "There is nobody waiting to be served!";
  }else {
    return "Currently serving " + line.shift() + '.';
  }
}
//


function currentLine(katzDeliLine) {
  var lineArray = [];
  if(katzDeliLine.length > 0) {
    for(var i = 0; i < katzDeliLine.length; i++) {
      lineArray.push(' ' + (i + 1) + '. ' + katzDeliLine[i])
    }
    return "The line is currently:" + lineArray;
  }
  else {
    return "The line is currently empty."
  }
}
