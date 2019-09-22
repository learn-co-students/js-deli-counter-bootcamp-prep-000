var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
learn  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}
function currentLine(katzDeliLine) {
  var lineDescription = "The line is currently";
  if (katzDeliLine.length === 0) {
    lineDescription += " empty.";
  } else {
    lineDescription +=": ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i > 0) {lineDescription +=", ";}
      lineDescription+= (i+1) + ". " + katzDeliLine[i];
    }
  }
  return lineDescription;
}