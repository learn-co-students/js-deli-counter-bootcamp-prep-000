var katzDeliLine = [];

function takeANumber(katsDeliLine, newPerson) {
  katsDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katsDeliLine.length} in line.`;
}

function nowServing(katsDeliLine) {
  if (katsDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${katsDeliLine.shift()}.`;
  }
}

function currentLine(katsDeliLine) {
  if (katsDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  else {
    var line = 'The line is currently: ';
    for (var i = 0; i < katsDeliLine.length; i++) {
      if(i === 0) {
        line += `${i+1}. ${katsDeliLine[i]}`;
      }
      else {
        line += `, ${i+1}. ${katsDeliLine[i]}`;
      }
    }
    return line;
  }
}