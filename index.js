var katzDeli = [];

function takeANumber (katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var lineLength = katzDeliLine.length;
  return "Welcome, " + newName + ". You are number " + lineLength + " in line.";
}

function nowServing (katzDeliLine, newName) {
     if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
  return "Currently serving " + katzDeliLine.shift() + ".";
}
}

function currentLine (katzDeliLine, newName) {
  var lineLength = katzDeliLine.length;
  let i = 1;
  if (lineLength < 1) {
    return "The line is currently empty.";
  } else {
    while (i <= lineLength) {
      katzDeliLine[i-1] = " " + i + ". " + katzDeliLine[i-1];
    i++;
    }
    return "The line is currently:" + katzDeliLine;
  }
}
   