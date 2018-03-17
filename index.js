var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var name = katzDeliLine[0];
    katzDeliLine = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  var i = 1;
  var finalString = `The line is currently: 1. ${katzDeliLine[0]}`;
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    do {
      finalString = finalString + `, ${i+1}. ${katzDeliLine[i]}`;
      i++;
    } while (i<katzDeliLine.length);
  }
  return finalString;
}