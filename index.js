var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine.shift();
    return "Currently serving " + name + ".";
  
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var i;
    var nameList = "The line is currently: ";
    
    for (i = 0; i < katzDeliLine.length - 1; i++) {
      nameList += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    nameList += (i + 1) + ". " + katzDeliLine[i];
    return nameList;
  } else {
    return "The line is currently empty.";
  }
}






