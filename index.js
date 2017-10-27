var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  var number = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + number + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }else {
    var result = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var temp = i + 1;
      var construct = temp + ". " + katzDeliLine[i];
      result.push(construct);
    }
    return "The line is currently: " + result.join(", ");
  }
}
