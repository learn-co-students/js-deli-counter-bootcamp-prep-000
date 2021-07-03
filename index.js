var katzDeliLine = [];

function takeANumber (katzDeliLine, newPerson) {
  var linePos = katzDeliLine.length + 1;
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + linePos + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let nextPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + nextPerson + ".";
  }
}

function currentLine (katzDeliLine) {
  var list = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      list.push (i+1 + ". " + katzDeliLine[i]);
      }
    }
    return "The line is currently: " + list.join (", ");
}