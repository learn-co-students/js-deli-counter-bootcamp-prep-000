var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function currentLine(NewLine) {
    var line = []
    if (NewLine.length === 0) {
      return "The line is currently empty."
    } else {
      for(var x = 0; x < NewLine.length; x++) {
        line += (x + 1) + ". " + NewLine[x] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
    
}
function nowServing(noOne) {
  if (noOne.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = noOne[0];
    noOne.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
