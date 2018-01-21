var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return ("Welcome, " + newName + ". You are number " + (katzDeliLine.indexOf(newName) + 1) + " in line.");
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  } else {
      return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  
  var currLineNumAndName = [];
  
  for ( var i = 0; i<katzDeliLine.length; i++ ) {
    currLineNumAndName.push(i+1 + ". " + katzDeliLine[i] );
  }
  return "The line is currently: " + currLineNumAndName.join(", ");
}