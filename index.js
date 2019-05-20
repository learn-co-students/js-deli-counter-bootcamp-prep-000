function takeANumber(line, name) {
  var welcome = "";
  line.push(name);
  welcome = "Welcome, " + name + ". You are number " + line.length + " in line.";
  return welcome;
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine[0];
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    katzDeliLine.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine) {
  var returnString = "The line is currently: ";
  var newString = "";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i !== katzDeliLine.length-1) {
        newString += (i+1) + ". " + katzDeliLine[i] + ", ";
      }
      else {
        newString += (i+1) + ". " + katzDeliLine[i];
      }
    }
    return returnString + newString;
  }
}