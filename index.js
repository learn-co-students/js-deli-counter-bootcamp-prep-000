var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson); // add newPerson to end of the line
  var position = katzDeliLine.indexOf(newPerson)+1;
  return `Welcome, ${newPerson}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var lineList = "The line is currently:"
    for (var i = 0; i < (katzDeliLine.length - 1); i++) {
        var lineList = lineList + " " + (i+1) + ". " + katzDeliLine[i] + ",";
    }
    lineList = lineList + " " + (i+1) + ". " + katzDeliLine[i];
    return lineList;
  }
}
