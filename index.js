var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ` + placeInLine + " in line.";
}

function nowServing(katzDeliLine) {
  var newLine = katzDeliLine.shift();
  if (newLine == undefined) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + newLine +"."
  }
}

function currentLine(katzDeliLine) {
var n = 1;
var line = "The line is currently:";
var newLine = [];
if (katzDeliLine.length == 0) {
 return "The line is currently empty."
}else{
 for (var nowLine = 0; nowLine < katzDeliLine.length; nowLine++) {
 newLine.push(" "+ n++ +". "  + katzDeliLine[nowLine])
 }
}
return line + newLine
}
