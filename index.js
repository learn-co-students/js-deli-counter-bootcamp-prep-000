var katzDeli = [];

function currentLine(katzDeliLine) {
 var n = 1;
 var line = "The line is currently:";
 var comma = ",";
var newLine = [];
if (katzDeliLine.length == 0) {
 return "The line is currently empty."
}else{
 for (var nowLine = 0; nowLine < katzDeliLine.length; nowLine++) {
newLine.push (" "+ n++ +". " + katzDeliLine[nowLine])
}
 }
return line + newLine
}

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + ' in line.'
}

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
