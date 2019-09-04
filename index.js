function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length < 0) {
    return `Welcome, ${name}! How can we help you?`;
  } else {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    var first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
}



function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
  line.push(` ${i + 1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently:${line}`;
}
}