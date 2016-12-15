var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var number = katzDeliLine.length;
  return `Welcome, ${katzDeliLine.slice(-1)}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return serving;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
  var intro = "The line is currently: ";
  for (var i = 0 ; i < katzDeliLine.length ; i++) {
    var currentNumber = `${i + 1}. ${katzDeliLine[i]}`;
    if (katzDeliLine.length === i + 1) {
    intro = intro + currentNumber;
  } else {
    intro = intro + currentNumber + ", "
  }
  }
  return intro;
}
}
