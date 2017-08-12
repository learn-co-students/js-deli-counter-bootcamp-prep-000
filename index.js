

function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person);
  var place = katzDeliLine.indexOf(person) + 1;
  return "Welcome, " + person + ". You are number " + place + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let p = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${p}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine) {
var whosInLine = "The line is currently: ";
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      whosInLine += `${i+1}. ${katzDeliLine[i]}, `;
    }
    return whosInLine += `${i+1}. ${katzDeliLine[i]}`;
  }
  else {
    return "The line is currently empty."
  }
}
