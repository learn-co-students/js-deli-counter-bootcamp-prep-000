function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  return (katzDeliLine.length === 0) ? 'There is nobody waiting to be served!' :
                                    `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    var whosLine = 'The line is currently: ';
    katzDeliLine.forEach(function(person, index) {
      whosLine += `${index + 1}. ${person}, `;
    });
    return whosLine.slice(0, -2);
  }
}
