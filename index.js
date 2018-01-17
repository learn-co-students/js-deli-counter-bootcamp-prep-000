var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var numberInLine = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${numberInLine} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  }
  else {
    var s = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      var count = i + 1;
      if (i < katzDeliLine.length-1) {
        s = s + `${count}. ${katzDeliLine[i]}, `;
      }
      else {
        s = s + `${count}. ${katzDeliLine[i]}`;
      }
    }
    return s;
  }
}