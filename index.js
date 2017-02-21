var katzDeli = [];

var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

var currentLine = katzDeliLine => {
  if (katzDeliLine.length > 0) {
    var line_string = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      line_string = line_string + `${i+1}. ${katzDeliLine[i]}, `;
    }
    return line_string.slice(0, line_string.length - 2);
  } else {
    return "The line is currently empty.";
  }
}
