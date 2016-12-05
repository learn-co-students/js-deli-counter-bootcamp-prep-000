var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var pos = [];
    var posName = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      pos[i] = i + 1;
      posName[i] = ` ${pos[i]}. ${katzDeliLine[i]}`
    }
    return `The line is currently:${posName}`
  }
}
