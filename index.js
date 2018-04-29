var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`
  }
}

function currentLine(katzDeliLine) {
  var lineOrder = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i=1; i-1 < katzDeliLine.length; i++) {
      var nextUp = (i > 1) ? `, ${i}. ${katzDeliLine[i-1]}` : `${i}. ${katzDeliLine[i-1]}`;
      lineOrder += nextUp;
    }
    return `The line is currently: ${lineOrder}`
  }
}