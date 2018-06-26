var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"}
  else {
    var removalLine = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + removalLine + ".";
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
  var lineList = [];
  for(var i=0; i<katzDeliLine.length; i++) {
    lineList.push(i+1 + ". " + katzDeliLine[i]);
  }
    return "The line is currently: " + lineList.join(', ');
}
}