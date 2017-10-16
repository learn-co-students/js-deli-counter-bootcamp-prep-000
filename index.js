let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine[katzDeliLine.length] = name
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine[0]) {
    var temp = "";
    for (let i = 0; i < katzDeliLine.length; i++) {
      temp = temp + (i + 1) + ". " + katzDeliLine[i];
      if (i != katzDeliLine.length - 1) {
        temp += ", ";
      }
    }
    return "The line is currently: " + temp;
  } else {
    return "The line is currently empty."
  }
}
