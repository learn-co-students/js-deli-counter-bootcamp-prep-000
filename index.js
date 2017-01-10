function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var name = "";

  if (katzDeliLine.length > 0) {
    name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: ";

  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line += `${i + 1}. ${katzDeliLine[i]}`;
      if (i + 1 !== katzDeliLine.length) {
        line += ", ";
      }
    }
    return line;
  } else {
    return "The line is currently empty."
  }
}
