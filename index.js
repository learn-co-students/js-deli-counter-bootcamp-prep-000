var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return katzDeliLine.indexOf(name) + 1;
}

function nowServing() {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return katzDeliLine.shift();
  }
}

function currentLine() {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var s = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      var count = i + 1;
      if (i < katzDeliLine.length-1) {
        s = s + `${i}. ${katzDeliLine[i]},`;
      }
      else {
        s = s + `${i}. ${katzDeliLine[i]}`;
      }
    }
    return s;
  }
}