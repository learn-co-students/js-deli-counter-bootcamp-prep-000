var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var a = katzDeliLine.indexOf(name);
  a += 1;
return "Welcome, " + name + ". You are number " + a + " in line.";
}


function nowServing(katzDeliLine) {
 if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";

} else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
debugger;
    var line = []
var lineL = katzDeliLine.length;
    for (var i = 0; i < lineL; i++) {
var j = i;
j += 1;
     line.push(" " + j + ". " + katzDeliLine[i])
    }
    return "The line is currently:" + line
  } else {
    return "The line is currently empty."
  }}
