var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    var i = 0;
    var newLine = [];
    for (i = 0; i < katzDeliLine.length; i++) {
      newLine.push(` ${i + 1}. ` + katzDeliLine[i]);
    }
    return `The line is currently:${newLine}`;
  } else {
    return "The line is currently empty.";
  }
}
