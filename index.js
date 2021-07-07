function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var now = katzDeliLine[0];
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift();
    return `Currently serving ${now}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var output = ` 1. ${katzDeliLine[0]}`
    for ( var i = 1; i < katzDeliLine.length; i++) {
        output = `${output}, ${i + 1}. ${katzDeliLine[i]}`;
      }
    return `The line is currently:${output}`
  } else {
    return `The line is currently empty.`
  }
}