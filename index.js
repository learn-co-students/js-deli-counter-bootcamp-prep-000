var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var nextInLine = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${nextInLine}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = "";
    let i = 0;
    while ( i < katzDeliLine.length ) {
      line += ` ${i+1}. ${katzDeliLine[i]},`;
      i += 1
    };
    line = line.slice(0, -1);
    return `The line is currently:${line}`
  }
}
