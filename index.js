var katzDeliLine = [];

function takeANumber(lineList, lastPerson) {
  var position = (lineList.length + 1);
  lineList.push(lastPerson);
  return ("Welcome, " + lastPerson + ". You are number " + position + " in line.");
}

function nowServing(lineList) {
  var nextUp = lineList.shift();
  if (nextUp === undefined) {
    return ("There is nobody waiting to be served!")
  }
  else {
    return ("Currently serving " + nextUp + ".")
  }
}

function currentLine(lineList) {
  if (lineList.length < 1) {
    return ("The line is currently empty.")
    }
  else { 
  for (var i = 0; i < lineList.length; i++) {
    lineList[i] = ((i + 1) + ". " + lineList[i]);
  }
  return("The line is currently: " + lineList.join(", "));
 }
}