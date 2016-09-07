var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  var indexNewPerson = katzDeliLine.indexOf(newPerson) + 1;
  return `Welcome, ${newPerson}. You are number ${indexNewPerson} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentlyServing = katzDeliLine.slice(0, 1);
    katzDeliLine = katzDeliLine.shift();
    return `Currently serving ${currentlyServing}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var text = "The line is currently: ";
    var i;

    for (i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        text += `${i + 1}. ${katzDeliLine[i]}`;
      } else {
        text += `${i + 1}. ${katzDeliLine[i]}, `;
      }
    }
    return text;

  } else {
    return "The line is currently empty.";
  }
}
