var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  }

function nowServing(deliLine) {
    if (deliLine.length > 0) {
      return "Currently serving " + deliLine.shift() + ".";
      return deliLine;
      }
    else {
      return "There is nobody waiting to be served!";
    }
  }


function currentLine(line) {
  if (line.length > 0) {
    var abc = []
    for (var i = 0;  i < line.length; i++)
        abc.push(" " + (i + 1) + ". " + line[i]);
    return ("The line is currently:" + abc)
    }
  else {
    return "The line is currently empty.";
  }
}
