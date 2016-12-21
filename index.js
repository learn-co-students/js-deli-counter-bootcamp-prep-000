var katzDeli = new Array();

function takeANumber(katzDeliLine, name) {
  var n;
  katzDeliLine.push(name);
  n = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${n} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine[0] != null) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine[0] != null) {
    var namePosition = "The line is currently:";
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        namePosition = namePosition + " " + (i+1) + ". " + `${katzDeliLine[i]}`;
      }
      else {
      namePosition = namePosition + " " + (i+1) + ". " + `${katzDeliLine[i]}` + ",";
    }
    }
    return namePosition;
  }
  else {
    return "The line is currently empty.";
  }
}
