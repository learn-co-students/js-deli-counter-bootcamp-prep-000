function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    for (let i = 1; i <= katzDeliLine.length; i++) {
      line += `${i}. ${katzDeliLine[i - 1]}`;
      if (i < katzDeliLine.length) {
        line += ", ";
      }
    } 
    return line;
  }
}