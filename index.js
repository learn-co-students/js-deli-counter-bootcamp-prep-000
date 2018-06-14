

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var first = katzDeliLine.shift();
    return `Currently serving ${first}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var msg = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      msg += `${i + 1}. ${katzDeliLine[i]}, `
    }
    return msg.substring(0, msg.length - 2);
  } else {
    return "The line is currently empty."
  }
}