var katzDeliLine = [];

function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var str = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return str;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var peopleInLine = '';
    for (var i = 0; i < katzDeliLine.length; i++) {
      peopleInLine += ` ${i+1}. ${katzDeliLine[i]},`;
    }
    peopleInLine = peopleInLine.slice(0,peopleInLine.length-1);      // remove the last comma
    return `The line is currently:${peopleInLine}`;
  }
}
