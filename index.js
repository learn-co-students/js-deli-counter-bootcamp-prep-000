function takeANumber(katzDeliLine, person) {
  if (katzDeliLine.length == 0) {
    katzDeliLine.unshift(person)
    return "Welcome, " + person + ". You are number 1 in line.";
  }

  else {
    katzDeliLine.push(person)
    return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine[0];
    katzDeliLine.shift(serving);
    return "Currently serving " + serving + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var katzDeliPatrons = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var j = i+1;
      katzDeliPatrons.push(" " + j + ". " + katzDeliLine[i]);
    }
      return "The line is currently:" + katzDeliPatrons
  }

  else {
    return "The line is currently empty.";
  }
}
